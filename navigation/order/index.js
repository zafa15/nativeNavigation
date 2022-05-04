import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from '../../screens/OrderScreen';
import { COLORS } from '../../constants/color';

const Stack = createNativeStackNavigator();

const OrderNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Orders'
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
            <Stack.Screen 
                name='Orders'
                component={OrderScreen}
                options={{title: 'Ordenes'}}
            />
        </Stack.Navigator>
    )
}

export default OrderNavigator;