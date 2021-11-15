import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const firstName = form.elements["firstName"].value;
    const secondName = form.elements["secondName"].value;
    const date = form.elements["date"].value;
    const tel = form.elements["tel"].value;
    const email = form.elements["email"].value;
    this.props.addPerson(firstName, secondName, date, tel, email);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          id="firstName"
          type="text"
          max="60"
          placeholder="First name..."
        />
        <input
          id="secondName"
          type="text"
          max="60"
          placeholder="Second name..."
        />
        <input id="date" type="date" />
        <input id="tel" type="tel" placeholder="Phone..." />
        <input id="email" type="email" placeholder="Email..." />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
