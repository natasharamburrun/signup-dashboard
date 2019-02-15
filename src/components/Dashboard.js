import React from "react";
import _ from "lodash";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signups: [],
      filterName: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const regEx = new RegExp(this.state.search, "i");
    const filterName = _.filter(this.props.signups, signup => {
      return regEx.test(signup.email);
    });
    this.setState({ filterName });
  };

  searchFilter() {
    if (!!this.state.search) {
      const regEx = new regEx(this.state.search, "i");
      return _.filter(this.props.signups, signup => regEx.test(signup.email));
    }
    return this.props.signups;
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ search: value });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="search-wrapper">
        <form className="searchbar container" onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="searchField"
                placeholder="search the dashboard"
                onChange={this.handleChange}
              />
            </div>
            <button className="button">Search</button>
          </div>
        </form>

        <div className="table-Wrapper">
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Campaign</th>
                <th>Source</th>
                <th>URL Ref</th>
                <th>Opt in</th>
                <th>Region</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {(this.state.filterName.length
                ? this.state.filterName
                : this.props.signups
              ).map(signup => (
                <tr key={signup.id}>
                  <td>{signup.email}</td>
                  <td>{signup.campaign}</td>
                  <td>{signup.source}</td>
                  <td>{signup.urlRef}</td>
                  <td>{signup.optIn}</td>
                  <td>{signup.region}</td>
                  <td>{signup.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Dashboard;
