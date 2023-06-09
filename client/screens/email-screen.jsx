import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const EmailScreen = ({ navigation }) => {
    const [ email, setEmail ] = useState('');

    const HandleEmailSubmit = () => {
        console.warn('The Email containing your password has been successfully sent.');
        console.log('Entered email:', email);

    };




    return (
        <View style={ styles.container }>
            {/* <Image source={ require('./assets/Logo.png') } style={ styles.image } /> */ }
            <Text style={ styles.title }>Enter Email</Text>
            <TextInput
                style={ styles.input }
                placeholder="Email"
                placeholderTextColor="white"
                keyboardType="email-address"
                onChangeText={ (text) => setEmail(text) }
                value={ email }
            />
            <Text style={ styles.style }>Enter your email to get the password:
                hint: ma***********d@gmail.com</Text>
            <TouchableOpacity style={ styles.button } onPress={ HandleEmailSubmit() }>
                <Text
                    onPress={ () => navigation.navigate('OTP') }
                    style={ styles.buttonText }
                >Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    style: {
        width: 358,
        height: 68,
        left: 9,
        top: 10,

        color: '#FFFFFF',

    },
    image: {
        width: 300,
        height: 400,
        top: 26,
        marginTop: -250,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#263151',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: '100%',
        marginBottom: 20,
        fontSize: 18,



    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EmailScreen;
