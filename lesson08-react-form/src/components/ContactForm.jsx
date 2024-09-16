import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Khi props editContact thay đổi => cập nhật state cho form value formValues
const ContactForm = (props) => {
  const {
    handleAddContact,
    editContact,
    handleUpdateContact,
    clearUpdateContact,
  } = props;

  const isEditContact = editContact !== null;

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    contactType: '',
  });

  useEffect(() => {
    if (editContact !== null) {
      setFormValues(editContact);
    } else {
      setFormValues({
        name: '',
        email: '',
        phone: '',
        contactType: '',
      });
    }
  }, [editContact]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (editContact) {
      // Define logic update contact
      handleUpdateContact(formValues);
      return;
    }

    const newContact = {
      ...formValues,
      id: uuidv4(),
    };

    handleAddContact(newContact);

    setFormValues({
      name: '',
      email: '',
      phone: '',
      contactType: '',
    });
  };

  const { name, email, phone } = formValues;

  return (
    <div>
      <h6>{isEditContact ? 'Edit contact' : 'Add contact'}</h6>
      <form className='flex flex-col gap-2' onSubmit={handleSubmitForm}>
        <input
          placeholder='Name'
          onChange={handleOnChange}
          value={name}
          name='name'
        />
        <input
          placeholder='Email'
          onChange={handleOnChange}
          value={email}
          name='email'
        />
        <input
          placeholder='Phone'
          onChange={handleOnChange}
          value={phone}
          name='phone'
        />

        <div>
          <h6 htmlFor='contactType'></h6>

          <label htmlFor='personal'>
            <input
              type='radio'
              id='personal'
              value='personal'
              name='contactType'
              onChange={handleOnChange}
              defaultChecked
            />
            Personal
          </label>

          <label htmlFor='professional'>
            <input
              type='radio'
              id='professional'
              value='professional'
              onChange={handleOnChange}
              name='contactType'
            />
            Professional
          </label>
        </div>
        <button type='submit'>
          {isEditContact ? 'Update contact' : 'Add contact'}
        </button>
        {isEditContact && <button onClick={clearUpdateContact}>Clear</button>}
      </form>
    </div>
  );
};

export default ContactForm;
