import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { FIREBASE_AUTH } from '../services/firebase/config';
import Avatar from '../components/avatar';
import Divider from '../components/divider';
import Heading from '../components/heading';
import NotificationSwitch from '../components/notifications-switch';

const LoginScreen = ({ navigation }) => {
    /* State */
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    /* get current User and update these fields */
    var currentUser = FIREBASE_AUTH.currentUser;
    var displayName = currentUser.displayName;
    var userEmail = currentUser.email;

    useEffect(() => {
        setName(displayName);
        setEmail(userEmail);
    }, [ currentUser, displayName, userEmail ]);

    /* Render Component */
    return (
        <View style={ styles.scrollViewContainer }>
            <ScrollView contentContainerStyle={ styles.container }>
                {/* Logo Container */ }
                <View style={ styles.logoContainer }>
                    <Avatar />
                </View>

                <Divider />

                {/* TextFields */ }
                <View style={ styles.body }>
                    <Heading text="User Settings" />
                    <View style={ styles.inputFieldsContainer }>
                        <TextInput
                            mode="outlined"
                            outlineColor="white"
                            textColor="white"
                            activeOutlineColor="white"
                            value={ name }
                            onChangeText={ setName }
                            style={ styles.textField }
                            label={ <Text style={ styles.labelText }>Display Name</Text> }
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
                    </View>

                    {/* Delete Account */ }
                    <View style={ styles.warning }>
                        <Text style={ [ styles.redButtonText, { width: '70%' } ] } ><Text style={ { fontWeight: 'bold' } }>Note:</Text> You will NOT be able to reverse this action. Proceed with CAUTION!</Text>
                        <TouchableOpacity style={ styles.redBorder }>
                            <Button labelStyle={ styles.redButtonText } >Delete</Button>
                        </TouchableOpacity>
                    </View>

                    {/* Save Button */ }
                    <TouchableOpacity
                        style={ [ styles.button, {
                            marginBottom: 16,
                        } ] }
                        onPress={ () => { } }
                    >
                        <Text style={ styles.buttonText }>Save</Text>
                    </TouchableOpacity>
                </View>

                <Divider />
                {/* Footer */ }
                <View style={ styles.footer } >
                    <Heading text="Application Settings" />
                    <NotificationSwitch />
                </View>

            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        backgroundColor: '#263151',
        paddingHorizontal: '5%',
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontFamily: 'Tomorrow-Regular',
        textAlign: 'center',
        color: 'white',
        fontSize: 46,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingHorizontal: '15%',

    },
    textField: {
        marginTop: 10,
        backgroundColor: '#263151',
    },
    warning: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    redBorder: {
        borderRadius: 8,
        borderColor: '#BA1F3B',
        borderWidth: 1,
        backgroundColor: '#452D4C',
    },
    redButton: {
        flex: 0,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    greenButton: {
        paddingHorizontal: 10,
    },
    greenButtonText: {
        color: '#5CFFFF',
    },
    redButtonText: {
        color: '#BA1F3B',
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
    },
    buttonText: {
        color: 'white',
        backgroundColor: '#263151',
    },

    footer: {
        paddingBottom: 10,
        paddingHorizontal: '15%',
    },
});

export default LoginScreen;
