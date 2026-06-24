import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { getContacts } from '../../services/contacts/contactStorage';

const ContactList = ({ navigation }: any) => {
  const [contacts, setContacts] = useState<any[]>([]);

  const loadContacts = async () => {
    const savedContacts = await getContacts();
    setContacts(savedContacts);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadContacts();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>

      <Button
        title="Add Contact"
        onPress={() => navigation.navigate('AddContact')}
      />

      <View style={styles.spacing} />

      {contacts.length === 0 ? (
        <Text>No contacts added yet.</Text>
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('ContactDetails', {
                  contact: item,
                })
              }>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.phone}</Text>
              <Text>{item.company}</Text>
              <Text>{item.notes}</Text>
            </TouchableOpacity>
          )}
        />
      )}
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
  spacing: {
    height: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactList;