import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { FIREBASE_AUTH } from '../services/firebase/config';

const RegisterScreen = ({ navigation }) => {
    /* State */
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();

    /* Methods */
    const _registerUser = async (_) => {

        try {
            const creds = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);

            if (creds.user) {

                // updating the display name of the user
                await updateProfile(creds.user, {
                    displayName: name,
                });

                navigation.navigate('Login');
            }
        } catch (e) {
            Alert.alert('Error', e.message);
        }
    };


    return (
        <View style={ styles.scrollViewContainer }>
            <ScrollView contentContainerStyle={ styles.container }>
                {/* Logo Container */ }
                <View style={ styles.logoContainer }>
                    <Text style={ styles.title }>OCTANE</Text>
                </View>

                {/* TextFields */ }
                <View style={ styles.body }>
                    <View style={ styles.inputFieldsContainer }>
                        <TextInput
                            mode="outlined"
                            outlineColor="white"
                            textColor="white"
                            activeOutlineColor="white"
                            value={ name }
                            onChangeText={ setName }
                            style={ styles.textField }
                            label={ <Text style={ styles.labelText }>Name</Text> }
                        />
                        <TextInput
                            mode="outlined"
                            outlineColor="white"
                            textColor="white"
                            activeOutlineColor="white"
                            value={ email }
                            onChangeText={ setEmail }
                            style={ styles.textField }
                            label={ <Text style={ styles.labelText }>Email</Text> }
                        />
                        <TextInput
                            mode="outlined"
                            outlineColor="white"
                            textColor="white"
                            activeOutlineColor="white"
                            value={ password }
                            onChangeText={ setPassword }
                            style={ styles.textField }
                            label={ <Text style={ styles.labelText }>Password</Text> }
                        />
                        <TextInput
                            mode="outlined"
                            outlineColor="white"
                            textColor="white"
                            activeOutlineColor="white"
                            value={ confirmPassword }
                            onChangeText={ setConfirmPassword }
                            style={ styles.textField }
                            label={ <Text style={ styles.labelText }>Confirm Password</Text> }
                        />
                    </View>

                    {/* Submit Button */ }
                    <TouchableOpacity
                        style={ styles.button }
                        onPress={ _registerUser }
                    >
                        <Text style={ styles.buttonText }>Register</Text>
                    </TouchableOpacity>
                </View>

                {/* Footer */ }
                <View style={ styles.footer } >
                    <Text style={ styles.buttonText }>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('Login') }
                        style={ styles.greenButton }
                    >
                        <Text style={ styles.greenButtonText }>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#263151',
        color: 'white',
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: 'Tomorrow-Regular',
        textAlign: 'center',
        color: 'white',
        fontSize: 46,
    },
    body: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: '15%',

    },
    textField: {
        marginTop: 10,
        height: 56,
        backgroundColor: '#263151',
    },
    greenButton: {
        paddingHorizontal: 10,
    },
    greenButtonText: {
        color: '#5CFFFF',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    labelText: {
        color: 'white',
        backgroundColor: '#263151',
    },
    button: {
        alignSelf: 'flex-end',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 6,
        padding: 8,
        marginVertical: 30,
    },
    buttonText: {
        color: 'white',
        backgroundColor: '#263151',
    },

});

export default RegisterScreen;
