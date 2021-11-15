import React, { Component } from "react";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(firstName, secondName, date, tel, email) {
    this.setState(prevState => ({
      people: [...prevState.people, { firstName, secondName, date, tel, email }]
    }));
  }



  deletePerson(email) {
    return () => {
      this.setState(prevState => ({
        people: prevState.people.filter(person => person.email !== email)
      }));
    };
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Form addPerson={this.addPerson} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Second name</th>
              <th>Date of birthday</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, index) => {
              return (
                <tr key={person.email}>
                  <th>{index + 1}</th>
                  <td>{person.firstName}</td>
                  <td>{person.secondName}</td>
                  <td>{person.date}</td>
                  <td>{person.tel}</td>
                  <td>{person.email}</td>
                  <td>
                    <button onClick={this.deletePerson(person.email)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;