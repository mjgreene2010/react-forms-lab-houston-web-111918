import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { username: "", password: "" };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // handleInputChangeP = e => {
  //   this.setState({
  //     password: e.target.value
  //   });
  // };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username && this.state.password)
      return this.props.onSubmit(this.state);
  };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   if (this.state.username && this.state.password)
  //     return this.props.onSubmit(this.state);
  // };

  render() {
    console.log(this.state.username);
    console.log(this.state.password);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
