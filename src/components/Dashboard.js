import React from "react";
import _ from "lodash";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signups: [],
      filterResults: [],
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

  filterSearch = () => {
    const regEx = new RegExp(this.state.search, "i");
    return _.filter(this.state.data.result, result => {
      return (
        regEx.test(result.email) ||
        regEx.test(result.campaign) ||
        regEx.test(result.source) ||
        regEx.test(result.url_ref) ||
        regEx.test(result.opt_in) ||
        regEx.test(result.region) ||
        regEx.test(result.country)
      );
    });
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
              {this.filterSearch().map(result => (
                <tr key={result.id}>
                  <td>{result.email}</td>
                  <td>{result.campaign}</td>
                  <td>{result.source}</td>
                  <td>{result.url_ref}</td>
                  <td>{result.opt_in}</td>
                  <td>{result.region}</td>
                  <td>{result.country}</td>
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
