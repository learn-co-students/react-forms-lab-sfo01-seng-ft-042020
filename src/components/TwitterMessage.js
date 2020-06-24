import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: ''
    };
  }

  trackInput = (event) => {
    this.setState({msg: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.trackInput} id="message" />
    <div><h4>{`${this.props.maxChars - this.state.msg.length} characters remaining`}</h4></div>
      </div>
    );
  }
}

export default TwitterMessage;
