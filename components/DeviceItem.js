import React from 'react';
import {
    View, 
    Text, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { COLORS } from '../constants/color';

const DeviceItem = ({item, onSelected}) => {

    console.log(item);

    return(
    <TouchableOpacity onPress={() => onSelected(item)}>
        <View style={styles.breadItem}>
            <View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.details}>{item.price}</Text>
                <Text style={styles.details}>{item.count}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    breadItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        /* backgroundColor: COLORS.yellowPastel */
        backgroundColor:'#fff'
    },
    title: {
        fontSize: 18,
        fontFamily: 'JosefinSansBold'
    },
    details: {
        fontSize: 16
    }
});

export default DeviceItem;