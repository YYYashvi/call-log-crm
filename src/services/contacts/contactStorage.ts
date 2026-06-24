import AsyncStorage from '@react-native-async-storage/async-storage';

const CONTACTS_KEY = 'contacts';

export const saveContact = async (contact: any) => {
  const existing = await getContacts();

  const updated = [...existing, contact];

  await AsyncStorage.setItem(
    CONTACTS_KEY,
    JSON.stringify(updated),
  );
};

export const getContacts = async () => {
  const data = await AsyncStorage.getItem(CONTACTS_KEY);

  return data ? JSON.parse(data) : [];
};