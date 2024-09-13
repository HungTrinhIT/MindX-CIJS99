import { useState } from 'react';

import ContactForm from './components/ContactForm';
import ManageContacts from './components/ManageContacts';

import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <ContactForm handleAddContact={handleAddContact} />
      <ManageContacts contacts={contacts} />
    </div>
  );
}

export default App;
