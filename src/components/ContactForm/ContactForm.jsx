import { Form, FormButton, FormInput, FormLabel } from './ContactForm.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getRandomStatus } from 'services/utils';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const status = await getRandomStatus();

    const newContact = {
      id: nanoid(3),
      name,
      age,
      status,
      avatar: name,
    };
    dispatch(addContact(newContact));
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'age':
        setAge(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  return (
    <Form>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Age
        <FormInput type="text" name="age" value={age} onChange={handleChange} />
      </FormLabel>
      <FormButton type="submit" onClick={handleSubmit}>
        Add
      </FormButton>
    </Form>
  );
};
