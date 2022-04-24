import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ShopNavigator from '../shop';
import CartNavigator from '../cart';
import FaceNavigator from '../face';
import { COLORS } from '../../constants/color';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
    <BottomTabs.Navigator initialRouteName='shop'
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: styles.tabBar,
    }}>
            <BottomTabs.Screen name='ShopTab' component={ShopNavigator} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-home" size={20} color={COLORS.redPastel} />
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen name='CartTab' component={CartNavigator} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-cart" size={20} color={COLORS.purplePastel} />
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen name='FaceTab' component={FaceNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="person" size={20} color={COLORS.yellowPastel} />
                        </View>
                    )
                }}
            />
    </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0, 
        /* borderRadius: 15, */
        height: 70,
        backgroundColor: '#fff',
        padding: 12
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TabNavigator;