import React, {useEffect} from 'react';
import { FlatList } from 'react-native';
import DeviceItem from '../components/DeviceItem';
import { useSelector, useDispatch } from 'react-redux';
import { filteredDevice, selectDevice } from '../store/actions/device.action';
//import {DEVICES} from '../data/devices';

/* const CategoryDeviceScreen = ({navigation,route}) => { */
const CategoryDeviceScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const categoryDevice = useSelector(state => state.devices.filteredDevice);
  const category = useSelector(state => state.categories.selected);
  //const devices = DEVICES.filter(device => device.category === route.params.categoryID);

  useEffect(() => {
    dispatch(filteredDevice(category.id))
  },[]);

  const handleSelected = (item) => {
    dispatch(selectDevice(item.id))
    navigation.navigate('Detail', {
      //productID: item.id,
      device: item
    });
  }

  const renderItemDevice = ({item}) => (
    <DeviceItem item={item} onSelected={handleSelected} />
  )

  return (
    <FlatList
      data={categoryDevice}
      keyExtractor={item => item.id}
      renderItem={renderItemDevice}
    />
  );
}


export default CategoryDeviceScreen;
