import { Button, StyleSheet, Text, View } from 'react-native';

const BreadDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Este es la vista de Detalle de Categoría</Text>
      <Button title='Ver + productos'  onPress={() => {
        navigation.navigate('Bread')
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BreadDetailScreen;
