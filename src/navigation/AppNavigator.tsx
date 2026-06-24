import React from 'react';
import ContactDetails from '../screens/Contacts/ContactDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CallHistoryList from '../screens/CallHistory/CallHistoryList';
import ContactList from '../screens/Contacts/ContactList';
import AddContact from '../screens/Contacts/AddContact';
import EditContact from '../screens/Contacts/EditContact';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="CallHistory"
                    component={CallHistoryList}
                    options={{ title: 'Call History' }}
                />

                <Stack.Screen
                    name="Contacts"
                    component={ContactList}
                    options={{ title: 'Contacts' }}
                />

                <Stack.Screen
                    name="AddContact"
                    component={AddContact}
                    options={{ title: 'Add Contact' }}
                />

                <Stack.Screen
                    name="ContactDetails"
                    component={ContactDetails}
                    options={{ title: 'Contact Details' }}
                />

                <Stack.Screen
                    name="EditContact"
                    component={EditContact}
                    options={{title: 'Edit Contact'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;