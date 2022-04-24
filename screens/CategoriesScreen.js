import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
//import { CATEGORIES } from '../data/categories';
import { selectCategory } from '../store/actions/category.action';
import GridItem from '../components/GridItem';


const CategoriesScreen = ({navigation}) => {

  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) =>{
    dispatch(selectCategory(item.id));
    navigation.navigate('Devices',{
      //categoryID: item.id,
      name: item.title
    });
  }


  const renderGridItem = ({item}) => (
    <GridItem item={item} onSelected={handleSelectedCategory}/>
  )

  return (

    <FlatList
    data={categories}
    keyExtractor={item => item.id}
    renderItem={renderGridItem}
    numColumns={2}
    />
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
