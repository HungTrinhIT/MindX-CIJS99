import React from 'react';
import ContactCard from './ContactCard';

const ManageContacts = ({ contacts }) => {
  return (
    <div className='flex flex-col gap-2'>
      {contacts.map((contact) => (
        <ContactCard data={contact} key={contact?.id} />
      ))}
    </div>
  );
};

export default ManageContacts;
