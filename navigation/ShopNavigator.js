import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyFaceScreen from '../screens/MyFaceScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import DeviceDetailScreen from '../screens/DeviceDetailScreen';
import CategoryDeviceScreen from '../screens/CategoryDeviceScreen';
import { COLORS } from '../constants/color';

const Stack = createNativeStackNavigator();

const ShopNavigator = () =>{
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={
            {
                headerStyle:{
                    backgroundColor: Platform.OS === 'android' ? COLORS.red : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.gray,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }
        }>
            <Stack.Screen name='MySelf' component={MyFaceScreen} options={{
                title: 'Mi Perfil'
            }}/>
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
    </NavigationContainer>
    )
}

export default ShopNavigator;