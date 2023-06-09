import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        (async () => {
            try {
                var user = JSON.parse(await AsyncStorage.getItem('user'));

                if (user) {
                    setTimeout((() => {
                        navigation.replace('Wrapper');
                    }), 2000);
                } else {
                    navigation.replace('Login');
                }
            } catch (error) {
                Alert.alert('Error', error.message);
            }
        })();
    }, []);

    /* Render Component */
    return (
        <View style={ styles.scrollViewContainer }>
            {/* Logo Container */ }
            <View style={ styles.logoContainer }>
                <Text style={ styles.title }>OCTANE</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#263151',
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: 'Tomorrow-Regular',
        textAlign: 'center',
        color: 'white',
        fontSize: 46,
    },

});

export default SplashScreen;
