import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {
  saveCallNote,
  getCallNote,
} from '../services/callNotes/callNoteStorage';

const CallCard = ({item}: any) => {
  const [note, setNote] = useState('');

  useEffect(() => {
    loadNote();
  }, []);

  const loadNote = async () => {
    const savedNote = await getCallNote(
      item.phoneNumber,
    );

    setNote(savedNote);
  };

  const handleSaveNote = async () => {
    await saveCallNote(
      item.phoneNumber,
      note,
    );

    Alert.alert(
      'Success',
      'Call note saved successfully',
    );
  };

  return (
    <View style={styles.card}>
      <Text>Name: {item.name || 'Unknown'}</Text>
      <Text>Phone: {item.phoneNumber}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Duration: {item.duration} sec</Text>

      <Text style={styles.label}>Notes</Text>

      <TextInput
        style={styles.noteInput}
        placeholder="Enter notes about this call"
        value={note}
        onChangeText={setNote}
        multiline
      />

      <Button
        title="Save Note"
        onPress={handleSaveNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  noteInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
});

export default CallCard;