import React from 'react';

const ContactCard = ({ data }) => {
  const { name, phone, email, contactType } = data;

  return (
    <div className='border-[1px] border-neutral-900 p-6'>
      <h6>{name}</h6>
      <p>{phone}</p>
      <p>{email}</p>
      <p>
        <b>Type</b>:{contactType}
      </p>
    </div>
  );
};

export default ContactCard;
