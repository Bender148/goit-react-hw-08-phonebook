import { useState, useEffect } from "react";

import Section from "./components/Section";
import PageTitle from "./components/PageTitle";
import Title from "./components/Title";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromStorage = JSON.parse(
      localStorage.getItem('contactsStorage'),
    );
    if (contactsFromStorage !== null) {
      setContacts(contactsFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactsStorage', JSON.stringify(contacts));
  }, [contacts]);

  const submitHandler = contact => {
    if (
      contacts.find(
        сontactItem =>
          сontactItem.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert('This contact already exists');
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const filterUpdate = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredContacts;
  };

  const deleteContact = id => {
    setContacts(contacts.filter(obj => obj.id !== id));
  };

  return (
    <>
      <PageTitle title="Phone Book" />
      <Section>
        <Title title="Add contacts" />
        <ContactForm submitContact={submitHandler} />
        <Title title="Сontacts" />
        <Filter
          filter={filter}
          filterUpdate={setFilter}
        />
        <ContactList
          filtered={filterUpdate}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
}
