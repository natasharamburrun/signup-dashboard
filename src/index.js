import React from "react";
import ReactDOM from "react-dom";

import Dashboard from "./components/Dashboard";

import "./static/scss/style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      signups: [
        {
          email: "testa@testa.com",
          campaign: "Newsletter",
          source: "456",
          urlRef: "123",
          optIn: "yes",
          region: "Midlands",
          country: "UK"
        },
        {
          email: "testb@testb.com",
          campaign: "Starwars",
          source: "def",
          urlRef: "456",
          optIn: "yes",
          region: "London",
          country: "UK"
        },
        {
          email: "testc@testc.com",
          campaign: "Education",
          source: "ghi",
          urlRef: "789",
          optIn: "No",
          region: "Melbourn",
          country: "Australia"
        }
      ]
    };
  }

  render() {
    return (
      <main>
        <section>
          <div className="container">
            <div className="title-wrapper">
              <h1 className="title">Signup Dashboard</h1>
            </div>
          </div>
          <Dashboard signups={this.state.signups} />
        </section>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
