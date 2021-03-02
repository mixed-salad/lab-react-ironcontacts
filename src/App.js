import "./App.css";
import contacts from "./contacts.json";
import React from "react";
import Table from "./component/table";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sampleArray: contacts.slice(0, 5),
    };
  }

  render() {
    return (
      <div className="IronContact">
        <h1>IronContacts</h1>
        <div className="table">
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.sampleArray.map((contact) => {
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
