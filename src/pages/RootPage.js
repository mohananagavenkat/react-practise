import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Register from '../components/Register';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Products from '../components/Products';
import Loader from '../components/Loader';
import { connect } from 'react-redux';
import { getProfile } from '../actions/auth.action'
import Cart from '../components/Cart';
import Logout from '../components/Logout';
import SecuredRoot from '../components/SecuredRott';

class RootPage extends Component {

  componentDidMount() {
    const { getProfile, isAuthenticated, loading } = this.props;
    if (!loading && !isAuthenticated && localStorage.getItem("token") !== null) {
      getProfile();
    }
  }

  getMenuItems = () => {
    const { isAuthenticated, location: { pathname } } = this.props;
    const navItems = [];

    // doesn't require login
    const publicItems = [
      {
        text: 'Home',
        link: '/home',
        exact: true,
        secure: false,
        component: Home
      }
    ];

    const authItems = [
      {
        text: 'Login',
        link: '/login',
        exact: true,
        secure: false,
        component: Login
      },
      {
        text: 'Register',
        link: '/register',
        exact: true,
        secure: false,
        component: Register
      },
    ];

    // needs login
    const privateItems = [
      {
        text: 'Products',
        link: '/products',
        exact: true,
        secure: true,
        component: Products
      },
      {
        text: 'Cart',
        link: '/cart',
        exact: true,
        secure: true,
        component: Cart
      },
      {
        text: 'Logout',
        link: '/logout',
        exact: true,
        secure: true,
        component: Logout
      },
    ]

    if (isAuthenticated) {
      navItems.push(
        ...publicItems,
        ...privateItems
      );
    } else {
      navItems.push(
        ...publicItems,
        ...authItems
      );
    }
    return {
      navItems: navItems.map(item => {
        if (item.link === pathname)
          item['active'] = true;
        return item;
      }),
      sitemap: [...publicItems, ...authItems, ...privateItems]
    }
  }

  render() {
    const { loading, isAuthenticated } = this.props;
    const { navItems, sitemap } = this.getMenuItems() || { navItems: [], sitemap: [] };
    // console.log(sitemap);
    return loading ?
      <Loader /> :
      (<>
        <Navbar menuItems={navItems} />
        <main>
          <Switch>
            {
              sitemap.map(({ secure, link, exact, component }) => {
                if (secure) {
                  return <Route exact={exact} key={link} path={link} render={props => <SecuredRoot component={component} {...props} />} />
                }
                return <Route exact={exact} key={link} path={link} component={component} />
              })
            }
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="**" render={() => (
              <h2>Page Not Found</h2>
            )} />
          </Switch>
        </main>
      </>
      )
  }
}

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated, loading, errors } = auth;
  return {
    loading,
    isAuthenticated,
    errors
  }
}

connect(mapStateToProps, null)(SecuredRoot);
export default connect(mapStateToProps, { getProfile })(RootPage);
