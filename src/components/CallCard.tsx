import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CallCard = ({ item }: any) => {
    return (
        <View style={styles.card}>
            <Text>Name: {item.name || 'Unknown'}</Text>
            <Text>Phone: {item.phoneNumber}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Duration: {item.duration} sec</Text>
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
});

export default CallCard;