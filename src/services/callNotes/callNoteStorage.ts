import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCallNote = async (
  phoneNumber: string,
  note: string,
) => {
  await AsyncStorage.setItem(
    `call_note_${phoneNumber}`,
    note,
  );
};

export const getCallNote = async (
  phoneNumber: string,
) => {
  const note = await AsyncStorage.getItem(
    `call_note_${phoneNumber}`,
  );

  return note || '';
};