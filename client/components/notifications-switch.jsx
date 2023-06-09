import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationSwitch = () => {
    const [ notificationsEnabled, setNotificationsEnabled ] = useState(false);

    const handleToggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    return (
        <View style={ styles.container }>
            <Text style={ styles.label }>Notifications</Text>
            <Switch
                value={ notificationsEnabled }
                onValueChange={ handleToggleNotifications }
                thumbColor={ notificationsEnabled ? '#4CAF50' : '#f4f3f4' }
                trackColor={ { true: '#AED581', false: '#BDBDBD' } }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    label: {
        color: 'white',
        marginRight: 16,
        fontSize: 16,
    },
});

export default NotificationSwitch;
