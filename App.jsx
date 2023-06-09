import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './client/screens/login-screen';
import RegisterScreen from './client/screens/register-screen';
import HomeWrapper from './client/screens/wrapper-screen';
import AnalyzerScreen from './client/screens/analyzer-screen';
import ResultsScreen from './client/screens/results-screen';
import OTPScreen from './client/screens/otp-screen';
import EmailScreen from './client/screens/email-screen';
import ChatScreen from './client/screens/chat_screen';
import ForumScreen from './client/screens/create_forum_screen';
import SplashScreen from './client/screens/splash-screen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ 'Splash' }>
                <Stack.Screen
                    name="Splash"
                    component={ SplashScreen }
                    options={ {
                        statusBarColor: '#263151',
                        headerShown: false,
                    } }

                />
                <Stack.Screen
                    name="Wrapper"
                    component={ HomeWrapper }
                    options={ {
                        statusBarColor: '#263151',
                        headerShown: false,
                    } }

                />
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
                <Stack.Screen
                    name="Analyzer"
                    component={ AnalyzerScreen }
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
                <Stack.Screen
                    name="OTP"
                    component={ OTPScreen }
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
                <Stack.Screen
                    name="ForgotPassScreen"
                    component={ EmailScreen }
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
                <Stack.Screen
                    name="Chat"
                    component={ ChatScreen }
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
                <Stack.Screen
                    name="CreateForum"
                    component={ ForumScreen }
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
                <Stack.Screen
                    name="Results"
                    component={ ResultsScreen }
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
