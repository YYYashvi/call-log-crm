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
  saveNote,
  getNote,
} from '../../services/notes/noteStorage';

const ContactDetails = ({route}: any) => {
  const {contact} = route.params;

  const [note, setNote] = useState('');

  useEffect(() => {
    loadNote();
  }, []);

  const loadNote = async () => {
    const savedNote = await getNote(contact.id);
    setNote(savedNote);
  };

  const handleSaveNote = async () => {
    await saveNote(contact.id, note);

    Alert.alert(
      'Success',
      'Note saved successfully',
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>

      <Text style={styles.label}>Name</Text>
      <Text>{contact.name}</Text>

      <Text style={styles.label}>Phone</Text>
      <Text>{contact.phone}</Text>

      <Text style={styles.label}>Company</Text>
      <Text>{contact.company}</Text>

      <Text style={styles.label}>Notes</Text>

      <TextInput
        style={styles.noteInput}
        placeholder="Enter notes about this contact"
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
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  noteInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
});

export default ContactDetails;