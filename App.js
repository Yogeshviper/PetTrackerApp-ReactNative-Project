import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screen/home'
import DogProfilePage from './src/screen/Dog_profile'
import PetInformationForm from './src/screen/Pet_info'
import Pet from './src/screen/Pet'
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Dog profile" component={DogProfilePage} />
        <Stack.Screen name="Pet info" component={PetInformationForm} />
        <Stack.Screen name="Pet" component={Pet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack