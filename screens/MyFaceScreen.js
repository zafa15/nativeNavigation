import { Button, StyleSheet, Text, View } from 'react-native';

const MyFaceScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Este será la pantalla de Perfil</Text>
      <Button title='Ir al Home'  onPress={() => {
        navigation.navigate('Home')
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

export default MyFaceScreen;
