import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveNote = async (
  contactId: string,
  note: string,
) => {
  await AsyncStorage.setItem(
    `note_${contactId}`,
    note,
  );
};

export const getNote = async (
  contactId: string,
) => {
  const note = await AsyncStorage.getItem(
    `note_${contactId}`,
  );

  return note || '';
};