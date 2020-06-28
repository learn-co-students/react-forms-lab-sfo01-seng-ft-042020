import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLoginPreventDefault = (event) => {
    event.preventDefault()
    let {username, password} = this.state
    if (username && password) {
      this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLoginPreventDefault}>
        <div>
          <label>
            Username
            <input onChange={this.handleInputChange} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInputChange} value={this.state.password} id="password" name="password" type="password" />
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
