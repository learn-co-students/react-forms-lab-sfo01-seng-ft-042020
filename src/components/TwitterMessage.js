import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }
 

  handleChange = event => {
    this.setState({
      message: event.target.value
    })

  }

  render() {
    const remainingChars = this.props.maxChars - this.state.message.length
    
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message}
          onChange={this.handleChange}
          />
        <h4>{remainingChars} left</h4>
      </div>

    );
  }
}

export default TwitterMessage;
