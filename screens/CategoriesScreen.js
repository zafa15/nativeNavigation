import { Button, StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Esta es la pantalla de Categorías</Text>

      <View>
      <Button title='Ver Productos'  onPress={() => {
        navigation.navigate('Bread')
      }}/>
      <Button title='Ir al Perfil'  onPress={() => {
        navigation.navigate('MySelf')
      }}/>
      </View>
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

export default CategoriesScreen;
