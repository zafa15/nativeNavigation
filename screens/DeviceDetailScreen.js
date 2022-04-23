import { Button, StyleSheet, Text, View } from 'react-native';

const DeviceDetailScreen = ({route}) => {
  const device = route.params.device;
  console.log(device);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{device.name}</Text>
      <Text>{device.description}</Text>
      <Text>{device.price}</Text>
      <Text>{device.count}</Text>
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
  title: {
    fontSize: 20,
    fontFamily: 'JosefinSansBold',
    marginBottom: 10,
  }
});

export default DeviceDetailScreen;