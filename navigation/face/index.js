import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MyFaceScreen from '../../screens/MyFaceScreen';
import { Platform } from 'react-native';
import { COLORS } from '../../constants/color';

const Stack = createNativeStackNavigator();

const FaceNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='Home'
        screenOptions={
            {
                headerStyle:{
                    backgroundColor: Platform.OS === 'android' ? COLORS.yellow : COLORS.yellow
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : 'white',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }
        }>
            <Stack.Screen name='MySelf' component={MyFaceScreen} options={{
                title: 'Perfil'
            }}/>
        </Stack.Navigator>
    )
}

export default FaceNavigator;