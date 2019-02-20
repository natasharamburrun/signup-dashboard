import React from "react";
import _ from "lodash";
// import axios from "axios";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signups: [],
      filterName: [],
      data: []
    };
  }

  componentWillMount() {
    fetch("https://gmjuiuy355.execute-api.us-west-1.amazonaws.com/master", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "KanoComputing"
      }
    })
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  handleSubmit = e => {
    e.preventDefault();
    const regEx = new RegExp(this.state.search, "i");
    const filterName = _.filter(this.props.signups, signup => {
      return (
        regEx.test(signup.email) ||
        regEx.test(signup.campaign) ||
        regEx.test(signup.source) ||
        regEx.test(signup.urlRef) ||
        regEx.test(signup.optIn) ||
        regEx.test(signup.region) ||
        regEx.test(signup.country)
      );
    });
    this.setState({ filterName });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ search: value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="dashboard-wrapper">
        <div className="search-wrapper">
          <form className="searchbarContainer" onSubmit={this.handleSubmit}>
            <div className="field">
              <input
                type="text"
                className="input"
                placeholder="search the dashboard"
                onChange={this.handleChange}
              />
              <button className="kano-btn">Search</button>
            </div>
          </form>
        </div>
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
