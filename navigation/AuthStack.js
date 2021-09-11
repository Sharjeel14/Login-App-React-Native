import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '243976730741-edb7fiq203ou43q0rr033sosj3v082rd.apps.googleusercontent.com',
    });
  
  }, []);
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Onboarding" component={OnboardingScreen}
                options={{header: () => null}}
            />
            <Stack.Screen
                name="Login" component={LoginScreen}
                options={{header: () => null}}
            />
            <Stack.Screen
                name="Signup" component={SignupScreen}
                options={({navigation}) => ({
                    title: '',
                    headerStyle:{
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    }
                })}
            />
        </Stack.Navigator>
  );
};

export default AuthStack;