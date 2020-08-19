import React, { PureComponent } from 'react'

class Table extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  handleSearch = (e) => {
    const { name, value } = e.target
    const { onSearch } = this.props;
    this.setState({
      [name]: value
    });
    onSearch(value);
  }

  render() {
    console.log('table render')
    const { searchString } = this.state;
    const { rows, keyColumn, columns } = this.props
    return (
      <div className='table-wrapper'>
        <div className="search-input">
          <input name='searchString' type="search" value={searchString} onChange={this.handleSearch} />
        </div>
        <table className='table'>
          <thead>
            <tr>
              {
                columns.map(col => {
                  return <th key={col}>{col}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              rows.map(row => {
                return <tr key={row[keyColumn]}>
                  {
                    columns.map(col => {
                      return <td key={col}>{row[col]}</td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
