import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/color';


const CartItem = ({item, onDelete}) => {
    return(
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text style={styles.text}>Cantidad: {item.quantity}</Text>
                    <Text style={styles.text}>{item.price}</Text>
                </View>
                <TouchableOpacity onPress={ ()=>onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color={COLORS.purple}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 20,
        shadowColor: '#c4c4c4',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        marginBottom:12
    },
    header: {
        fontSize: 16,
        fontFamily: 'JosefinSans'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontFamily: 'JosefinSans'
    }
})

export default CartItem