import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactDetails = ({ route }: any) => {
    const { contact } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Details</Text>

            <Text style={styles.label}>Name</Text>
            <Text>{contact.name}</Text>

            <Text style={styles.label}>Phone</Text>
            <Text>{contact.phone}</Text>

            <Text style={styles.label}>Company</Text>
            <Text>{contact.company}</Text>
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
        fontWeight: 'bold',
    },
});

export default ContactDetails;