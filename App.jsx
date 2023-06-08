import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './client/screens/home-screen';
import LoginScreen from './client/screens/login-screen';
import RegisterScreen from './client/screens/register-screen';
import HomeWrapper from './client/screens/wrapper-screen';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Wrapper" component={ HomeWrapper } />
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
                        headerShadowVisible: false,
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
