import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactListData from "./ContactList/ContactList.json";
import "./App.css";
import "modern-normalize";

const App = () => {
  const [contactList, setContactList] = useState(() => {
    const saveContactList = JSON.parse(
      window.localStorage.getItem("contactList")
    );
    return saveContactList || contactListData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contactList", JSON.stringify(contactList));
  });

  const filterContact = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addNewContact = (newCont) => {
    setContactList((prevCont) => {
      return [...prevCont, newCont];
    });
  };

  const deleteContact = (contactId) => {
    setContactList((prevCont) => {
      return prevCont.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox filter={filter} onFilterContact={setFilter} />
      <ContactList
        filterContact={filterContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
