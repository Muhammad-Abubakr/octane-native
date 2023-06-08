import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './home-screen';
import ProfileScreen from './profile-screen';

const Tab = createMaterialBottomTabNavigator();

function HomeWrapper() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ HomeScreen } />
            <Tab.Screen name="Settings" component={ ProfileScreen } />
        </Tab.Navigator>
    );
}


export default HomeWrapper;
