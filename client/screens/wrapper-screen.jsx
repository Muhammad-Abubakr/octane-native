import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './home-screen';
import ProfileScreen from './profile-screen';
import HistoryScreen from './history-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function HomeWrapper() {
    return (
        <Tab.Navigator
            inactiveColor="#BDC1C9"
            activeColor="white"
            initialRouteName="Home"
            barStyle={ {
                backgroundColor: '#1A2543',
            } }
        >
            <Tab.Screen
                name="Home"
                component={ HomeScreen }
                options={ {
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons
                        name="redhat"
                        size={ 24 }
                        color={ '#A59DD0' }
                    />),
                } }
            />

            <Tab.Screen
                name="History"
                component={ HistoryScreen }
                options={ {
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons
                        name="history"
                        size={ 24 }
                        color={ '#F28787' }
                    />),
                } }
            />
            <Tab.Screen
                name="Profile"
                component={ ProfileScreen }
                options={ {
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons
                        name="account-settings"
                        size={ 24 }
                        color={ '#88A6B8' }
                    />),
                } }
            />
        </Tab.Navigator>
    );
}


export default HomeWrapper;
