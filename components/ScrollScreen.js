import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FlatListScreen from './scroll/FlatListScreen';
import FormScreen from './scroll/FormScreen';
import SectionListScreen from './scroll/SectionListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function ScrollScreen() {
    return (
            <Tab.Navigator
                
            >
                <Tab.Screen name="Lista" component={FlatListScreen} />
                <Tab.Screen name="Seção" component={SectionListScreen} />
                <Tab.Screen name="Formulario" component={FormScreen} />
            </Tab.Navigator>
    );
}
