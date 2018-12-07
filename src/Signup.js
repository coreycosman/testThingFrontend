import React, { Component } from "react";
import Api from "./services/Api";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
  }

  postFormData(formData) {
    Api().post("signup", formData);
  }

  render() {
    return (
      <div>
        Signup
        <form action="post">
          <input
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="email"
            type="text"
            name="email"
          />

          <input
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="password"
            type="text"
            name="password"
          />
        </form>
        <button
          onClick={e =>
            this.postFormData({
              email: this.state.email,
              password: this.state.password
            })
          }
        >
          submit
        </button>
      </div>
    );
  }
}

export default Signup;
