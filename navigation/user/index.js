import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../../screens/AuthScreen';
import { COLORS } from '../../constants/color';

const Stack = createNativeStackNavigator();

const AuthNavigator = () =>(
    <Stack.Navigator
    initialRouteName='Auth'
    screenOptions={{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.pinkPastel : COLORS.pinkPastel,                    
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'white',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}
    >
        <Stack.Screen name='Auth' component={AuthScreen} />
    </Stack.Navigator>
);

export default AuthNavigator