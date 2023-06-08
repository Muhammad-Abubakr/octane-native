import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    const [ name, setName ] = useState();
    const [ password, setPassword ] = useState();


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
                            value={ password }
                            onChangeText={ setPassword }
                            style={ styles.textField }
                            label={ <Text style={ styles.labelText }>Password</Text> }
                        />
                    </View>

                    {/* Forgot Password */ }
                    <TouchableOpacity style={ styles.greenButton }>
                        <Text style={ [ styles.greenButtonText, { paddingVertical: 10, alignSelf: 'flex-end' } ] }>Forgot Password?</Text>
                    </TouchableOpacity>

                    {/* Submit Button */ }
                    <TouchableOpacity style={ styles.button }>
                        <Text style={ styles.buttonText }>Submit</Text>
                    </TouchableOpacity>
                </View>

                {/* Footer */ }
                <View style={ styles.footer } >
                    <Text style={ styles.buttonText }>Don't have an account?</Text>
                    <TouchableOpacity style={ styles.greenButton }>
                        <Text
                            onPress={ () => navigation.navigate('Register') }
                            style={ styles.greenButtonText }
                        >Register Here</Text>
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
        alignSelf: 'center',
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

export default LoginScreen;
