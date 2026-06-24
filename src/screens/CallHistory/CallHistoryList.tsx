import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    Alert,
    StyleSheet,
} from 'react-native';

import CallCard from '../../components/CallCard';
import { getCallLogs } from '../../services/calling/callLogs';

const CallHistoryList = ({ navigation }: any) => {
    const [calls, setCalls] = useState<any[]>([]);

    const loadCalls = async () => {
        try {
            const logs = await getCallLogs();
            setCalls(logs);
        } catch (error) {
            Alert.alert('Failed to load call logs');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Call Log CRM</Text>

            <Button
                title="Go To Contacts"
                onPress={() => navigation.navigate('Contacts')}
            />

            <View style={styles.spacing} />

            <Button
                title="Load Call History"
                onPress={loadCalls}
            />

            <FlatList
                data={calls}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <CallCard item={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    spacing: {
        height: 10,
    },
});

export default CallHistoryList;