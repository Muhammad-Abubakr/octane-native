import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './client/screens/home-screen';
import LoginScreen from './client/screens/login-screen';
import RegisterScreen from './client/screens/register-screen';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={ HomeScreen } />
                <Stack.Screen
                    name="Login"
                    component={ LoginScreen }
                    options={ {
                        statusBarColor: '#263151',
                        headerShown: false,
                    } }
                />
                <Stack.Screen
                    name="Register"
                    component={ RegisterScreen }
                    options={ {
                        statusBarColor: '#263151',
                        headerTitleAlign: 'left',
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: '#263151',
                        },
                    } }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
