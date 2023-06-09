import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const OTPScreen = ({ navigation }) => {
    const [ otp, setOTP ] = useState('');

    const handleOTPEnter = () => {
        // Logic to handle OTP submission
        console.log('Entered OTP:', otp);
    };

    return (
        <View style={ styles.container }>
            {/* <Image source={ require('./assets/Logo.png') } style={ styles.image } /> */ }

            <Text style={ styles.head }>Verification Code</Text>


            <Text style={ styles.question }>We have sent you a 4-digit OTP on xyz@gmail.com</Text>



            <Text style={ styles.title }>Enter OTP</Text>
            <View style={ styles.otpContainer }>
                <TextInput
                    style={ styles.otpInput }
                    placeholder="-"
                    maxLength={ 1 }
                    keyboardType="numeric"
                    onChangeText={ (text) => setOTP(text) }
                />
                <TextInput
                    style={ styles.otpInput }
                    placeholder="-"
                    maxLength={ 1 }
                    keyboardType="numeric"
                    onChangeText={ (text) => setOTP(text) }
                />
                <TextInput
                    style={ styles.otpInput }
                    placeholder="-"
                    maxLength={ 1 }
                    keyboardType="numeric"
                    onChangeText={ (text) => setOTP(text) }
                />
                <TextInput
                    style={ styles.otpInput }
                    placeholder="-"
                    maxLength={ 1 }
                    keyboardType="numeric"
                    onChangeText={ (text) => setOTP(text) }
                />
            </View>
            <TouchableOpacity style={ styles.button } onPress={ handleOTPEnter }>
                <Text
                    onPress={ () => navigation.navigate('Login') }
                    style={ styles.buttonText }
                >VERIFY</Text>
            </TouchableOpacity>

            <Text style={ styles.question }>Didn't receive an otp</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    head: {
        fontSize: 40,
        color: 'white',
        marginBottom: 30,
        fontWeight: 'bold',
    },
    question: {
        color: 'white',
        fontSize: 15,


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
        backgroundColor: '#263151', // Add background color here
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    otpContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    otpInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginRight: 10,
        width: 40,
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'white',
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

export default OTPScreen;
