import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  isFormValid = () => {
    const {username, password} = this.state
    console.log(username && password)
    return username && password
  }

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit}
        disabled={!this.isFormValid}
        >
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
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
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button 
            
            type="submit"
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
