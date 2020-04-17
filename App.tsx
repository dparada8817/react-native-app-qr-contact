import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home/HomeScreen';
import ContactosScreen from './screens/contact-list/ContactosScreen';
import QrGeneradorScreen from './screens/qr-generator/QrGeneradorScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Contactos" component={ContactosScreen} />
      <Stack.Screen name="Qr" component={QrGeneradorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
