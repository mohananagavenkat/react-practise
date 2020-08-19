import React, { Component } from 'react'
import Table from '../Table';

class Users extends Component {

  state = {
    users: [],
    filteredUsers: []
  }

  getUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 3,
            email: 'venkat@coffeebeans.io',
            name: 'test1',
            role: 'ADMIN',
            created_at: '2020-04-15T09:40:09Z',
            created_by: 'rewardDB',
            deleted_at: null,
            reward_points: 20
          },
          {
            id: 4,
            email: 'sudeep@coffeebeans.io',
            name: 'test2',
            role: 'ADMIN',
            created_at: '2020-04-15T09:40:09Z',
            created_by: 'rewardDB',
            deleted_at: null,
            reward_points: 240
          },
          {
            id: 5,
            email: 'rishab@coffeebeans.io',
            name: 'test3',
            role: 'ADMIN',
            created_at: '2020-04-15T09:40:09Z',
            created_by: 'rewardDB',
            deleted_at: null,
            reward_points: 200
          }
        ]);
      }, 2000)
    })
  }

  componentDidMount() {
    this.getUsers().then(users => {
      console.log(users)
      this.setState({ users, filteredUsers: [...users] });
    })
  }

  getColumns = (users) => {
    console.log(users)
    return Object.keys(users[0]);
  }

  handleSearch = (searchString) => {
    console.log(searchString);
    const { users } = this.state;
    const filteredUsers = [...users.filter(user => user.email.includes(searchString))];
    this.setState({ filteredUsers });
  }

  render() {
    const { users, filteredUsers } = this.state;
    console.log(users);
    return (
      users.length > 0 && <Table keyColumn='email' columns={this.getColumns(users)} rows={filteredUsers} onSearch={this.handleSearch} />
    )
  }
}

export default Users
