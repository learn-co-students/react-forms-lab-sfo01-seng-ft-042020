import React from "react";

class TwitterMessage extends React.Component {
 
  constructor() {
    super();

    this.state = {
      message:"",
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    const remainingChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.message} type="text" name="message" id="message" />
        <h4>{remainingChars} Characters left</h4>
      </div>
    );
  }
}

export default TwitterMessage;
