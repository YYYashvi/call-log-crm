import CallLogs from 'react-native-call-log';
import { PermissionsAndroid } from 'react-native';

export const requestCallLogPermission = async () => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        {
            title: 'Call Log Permission',
            message: 'This app needs access to your call logs.',
            buttonPositive: 'Allow',
        },
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
};

export const getCallLogs = async () => {
    const hasPermission = await requestCallLogPermission();

    if (!hasPermission) {
        throw new Error('Permission denied');
    }

    return await CallLogs.load(20);
};