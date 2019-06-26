import React, { Component } from "react";

class Contact extends Component {
  onSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <h1>Contact</h1>
        <form>
          Name:
          <input placeholder="name" type="name" />
          <br />
          Email:
          <input placeholder="email" type="email" />
          <br />
          <br />
          <button
            onClick={this.onSubmit}
            style={{ textAlign: "center", marginLeft: 20 }}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Contact;
