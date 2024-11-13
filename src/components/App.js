import { Component } from "react";
import "./App.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
  };

  addContact = (contact) => {
    let arrayNames = [];
    this.state.contacts.map((element) => arrayNames.push(element.name));
    !arrayNames.includes(contact.name)
      ? this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }))
      : alert(`${contact.name} is already in contacts`);
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className="App">
        <ContactForm addContact={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
