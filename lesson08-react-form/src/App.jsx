import { useState } from 'react';

import ContactForm from './components/ContactForm';
import ManageContacts from './components/ManageContacts';

import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleUpdateContact = (oldContact) => {
    const clonedContacts = [...contacts];
    const currentUpdatingContactIndex = contacts.findIndex(
      (contact) => contact.id === oldContact.id
    );

    clonedContacts[currentUpdatingContactIndex] = oldContact;

    setContacts(clonedContacts);
  };

  const onSelectContactToEdit = (id) => {
    const selectedContact = contacts.find((contact) => contact.id === id);
    setEditContact(selectedContact);
  };

  const clearUpdateContact = () => {
    setEditContact(null);
  };

  return (
    <div>
      <ContactForm
        handleAddContact={handleAddContact}
        editContact={editContact}
        handleUpdateContact={handleUpdateContact}
        clearUpdateContact={clearUpdateContact}
      />
      <ManageContacts
        contacts={contacts}
        onSelectContactToEdit={onSelectContactToEdit}
      />
    </div>
  );
}

export default App;
