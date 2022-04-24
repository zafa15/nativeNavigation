import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../../screens/CategoriesScreen';
import DeviceDetailScreen from '../../screens/DeviceDetailScreen';
import CategoryDeviceScreen from '../../screens/CategoryDeviceScreen';
import { COLORS } from '../../constants/color';

const Stack = createNativeStackNavigator();

const ShopNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='Home'
        screenOptions={
            {
                headerStyle:{
                    backgroundColor: Platform.OS === 'android' ? COLORS.red : COLORS.red
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : 'white',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }
        }>
            <Stack.Screen name='Home' component={CategoriesScreen} options={{
                title: 'Categorías'
            }}/>
            <Stack.Screen name='Devices' component={CategoryDeviceScreen} options={
                ({route}) => ({
                    title:route.params.name
                })
            }/>
            <Stack.Screen name='Detail' component={DeviceDetailScreen} options={
                ({route}) => ({
                    title:route.params.name
                })
            }/>
        </Stack.Navigator>
    )
}

export default ShopNavigator;