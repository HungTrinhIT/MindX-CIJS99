import React from 'react';

const ContactCard = ({ data, onSelectContactToEdit }) => {
  const { name, phone, email, contactType, id } = data;

  return (
    <div className='border-[1px] border-neutral-900 p-6'>
      <h6>{name}</h6>
      <p>{phone}</p>
      <p>{email}</p>
      <p>
        <b>Type</b>:{contactType}
      </p>
      <button>Delete</button>
      <button onClick={() => onSelectContactToEdit(id)}>Edit</button>
    </div>
  );
};

export default ContactCard;
