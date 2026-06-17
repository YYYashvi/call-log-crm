import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  PermissionsAndroid,
  StyleSheet,
  Alert,
} from 'react-native';

import CallLogs from 'react-native-call-log';

function App() {
  const [calls, setCalls] = useState<any[]>([]);

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        {
          title: 'Call Log Permission',
          message: 'This app needs access to your call logs.',
          buttonPositive: 'Allow',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const loadCalls = async () => {
    const hasPermission = await requestPermission();

    if (!hasPermission) {
      Alert.alert('Permission denied');
      return;
    }

    try {
      const logs = await CallLogs.load(20);
      setCalls(logs);
    } catch (error) {
      console.log(error);
      Alert.alert('Failed to load call logs');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call Log CRM</Text>

      <Button title="Load Call History" onPress={loadCalls} />

      <FlatList
        data={calls}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Name: {item.name || 'Unknown'}</Text>
            <Text>Phone: {item.phoneNumber}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Duration: {item.duration} sec</Text>
          </View>
        )}
      />
    </View>
  );
}

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
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
});

export default App;