import React from 'react';
import { FlatList } from 'react-native';
import DeviceItem from '../components/DeviceItem';
import {DEVICES} from '../data/devices';

const CategoryDeviceScreen = ({navigation,route}) => {

  const devices = DEVICES.filter(device => device.category === route.params.categoryID);

  console.log(devices);

  const handleSelected = (item) => {
    navigation.navigate('Detail', {
      productID: item.id,
      device: item
    });
  }

  const renderItemDevice = ({item}) => (
    <DeviceItem item={item} onSelected={handleSelected} />
  )

  return (
    <FlatList
      data={devices}
      keyExtractor={item => item.id}
      renderItem={renderItemDevice}
    />
  );
}


export default CategoryDeviceScreen;
