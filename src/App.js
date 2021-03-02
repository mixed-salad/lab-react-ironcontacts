import "./App.css";
import contacts from "./contacts.json";
import React from "react";
import Table from "./component/table";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contactArray: contacts.slice(0, 5),
    };
  }

  addContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const clonedArray = [...this.state.contactArray];
    const personAdded = contacts[randomIndex];
    if (!clonedArray.includes(personAdded)) {
      // if not, push into the new array
      clonedArray.push(personAdded);
    }
    this.setState({
      contactArray: clonedArray,
    });
  };

  render() {
    return (
      <div className="IronContact">
        <h1 className="header">IronContacts</h1>
        <button id="add-random-contact" onClick={this.addContact}>
          Add New Contact
        </button>
        <div className="table">
          <table>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
            {this.state.contactArray.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      className="contact-picture"
                      src={contact.pictureUrl}
                    ></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </table>
        </div>
        ;
      </div>
    );
  }
}

export default App;
