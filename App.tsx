import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuItemScreen from './screens/AddMenuItemScreen';
import FilterScreen from './screens/FilterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Menu Item" component={AddMenuItemScreen} />
        <Stack.Screen name="Filter Menu" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
