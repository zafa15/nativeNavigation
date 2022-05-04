import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/actions/cart.action';

/* const DeviceDetailScreen = ({route}) => { */
const DeviceDetailScreen = () => {

  const dispatch = useDispatch();
  const device = useSelector(state => state.devices.selected);
  /* const devices = useSelector(state => state.devices.list);
  const device = devices.find(item => item.id === deviceID); */

  const handlerAddItemCart = () => dispatch(addItem(device));
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{device.name}</Text>
      <Text>{device.description}</Text>
      <Text>{device.price}</Text>
      <Text>{device.count}</Text>
      <Button style={styles.button} title='Agregar al Carrito' onPress={handlerAddItemCart} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    width: 200,
    padding: 15,
    margin: 15,    
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#bbb'
  },

  title: {
    fontSize: 20,
    fontFamily: 'JosefinSansBold',
    marginBottom: 10,
  }
});

export default DeviceDetailScreen;
