import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

import {saveContact} from '../../services/contacts/contactStorage';

const AddContact = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const handleSave = async () => {
    if (!name || !phone) {
      Alert.alert('Validation', 'Name and Phone are required');
      return;
    }

    const contact = {
      id: Date.now().toString(),
      name,
      phone,
      company,
      notes,
    };

    await saveContact(contact);

    Alert.alert('Success', 'Contact saved successfully');

    setName('');
    setPhone('');
    setCompany('');
    setNotes('');

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Contact</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter contact name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Company</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter company name"
        value={company}
        onChangeText={setCompany}
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.noteInput}
        placeholder="Enter notes about this contact"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <Button
        title="Save Contact"
        onPress={handleSave}
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
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  noteInput: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10,
  minHeight: 100,
  textAlignVertical: 'top',
  marginBottom: 15,
},

});

export default AddContact;