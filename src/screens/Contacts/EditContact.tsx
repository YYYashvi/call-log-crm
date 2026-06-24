import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

import {updateContact} from '../../services/contacts/contactStorage';

const EditContact = ({route, navigation}: any) => {
  const {contact} = route.params;

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [company, setCompany] = useState(contact.company);
  const [notes, setNotes] = useState(contact.notes || '');

  const handleUpdate = async () => {
    const updatedContact = {
      ...contact,
      name,
      phone,
      company,
      notes,
    };

    await updateContact(updatedContact);

    Alert.alert(
      'Success',
      'Contact updated successfully',
    );

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Contact</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Company</Text>
      <TextInput
        style={styles.input}
        value={company}
        onChangeText={setCompany}
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.noteInput}
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <Button
        title="Update Contact"
        onPress={handleUpdate}
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
    marginBottom: 5,
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
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

export default EditContact;