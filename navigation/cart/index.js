import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../screens/CartScreen';
import { COLORS } from '../../constants/color';

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return(
    <Stack.Navigator initialRouteName='Home'
        screenOptions={
            {
                headerStyle:{
                    backgroundColor: Platform.OS === 'android' ? COLORS.purple : COLORS.purple
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : 'white',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }
        }>
            <Stack.Screen name='Cart' component={CartScreen} options={{
                title: 'Carrito'
            }}/>
            
        </Stack.Navigator>
    )
}

export default CartNavigator;