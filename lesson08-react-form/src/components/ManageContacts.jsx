import React from 'react';
import ContactCard from './ContactCard';

const ManageContacts = ({ contacts, onSelectContactToEdit }) => {
  return (
    <div className='flex flex-col gap-2'>
      {contacts.map((contact) => (
        <ContactCard
          data={contact}
          key={contact?.id}
          onSelectContactToEdit={onSelectContactToEdit}
        />
      ))}
    </div>
  );
};

export default ManageContacts;
