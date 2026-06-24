import AsyncStorage from '@react-native-async-storage/async-storage';

const CONTACTS_KEY = 'contacts';

export const getContacts = async () => {
  const data = await AsyncStorage.getItem(CONTACTS_KEY);

  return data ? JSON.parse(data) : [];
};

export const saveContact = async (contact: any) => {
  const existing = await getContacts();

  const updated = [...existing, contact];

  await AsyncStorage.setItem(
    CONTACTS_KEY,
    JSON.stringify(updated),
  );
};

export const updateContact = async (updatedContact: any) => {
  const contacts = await getContacts();

  const updated = contacts.map((contact: any) =>
    contact.id === updatedContact.id
      ? updatedContact
      : contact,
  );

  await AsyncStorage.setItem(
    CONTACTS_KEY,
    JSON.stringify(updated),
  );
};

export const deleteContact = async (contactId: string) => {
  const contacts = await getContacts();

  const updated = contacts.filter(
    (contact: any) => contact.id !== contactId,
  );

  await AsyncStorage.setItem(
    CONTACTS_KEY,
    JSON.stringify(updated),
  );
};