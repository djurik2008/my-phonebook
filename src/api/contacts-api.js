import instance from './auth-api';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async body => {
  const { data } = await instance.post('/contacts', body);
  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const editeContact = async (id, body) => {
  const { data } = await instance.patch(`/contacts/${id}`, body);
  return data;
};
