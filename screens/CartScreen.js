import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import { CART } from '../data/cart';
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { confirmCart, removeItem } from '../store/actions/cart.action';

const CartScreen = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
    

    const handlerConfirmCart = () => {
      if(items.length>0){
        dispatch(confirmCart(items, total));
      }else{
        console.log("No hay elementos en la lista.");
      }
    };
    const handlerDeleteItem = id => dispatch(removeItem(id))

    const renderItem = ({ item }) => (
        <CartItem item={item} onDelete={handlerDeleteItem.bind(this, item.id)} />
    )

    console.log(items.length);

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
                    <Text>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>total</Text>
                        <Text style={styles.text}>{total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      backgroundColor: '#fff',
      paddingBottom: 120,
    },
    list: {
      flex: 1,
    },
    footer: {
      padding: 12,
      borderTopColor: '#ccc',
      borderTopWidth: 1,
    },
    confirm: {
      backgroundColor: '#ccc',
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    total: {
      flexDirection: 'row'
    },
    text: {
      fontSize: 18,
      fontFamily: 'JosefinSans',
      padding: 8,
    }
  });

export default CartScreen