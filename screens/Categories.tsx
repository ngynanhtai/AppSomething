import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import React from 'react';
import Icon01 from '../assets/icon01.png';
import Icon02 from '../assets/icon02.png';
import Icon03 from '../assets/icon03.png';

export default class Categories extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Fried Chicken', image: Icon01},
        { id: 2, name: 'Pizza', image: Icon02},
        { id: 3, name: 'Steak', image: Icon03}
      ]
    };
  }
  render() {
    const { categories } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
            <FlatList style={styles.flatList}
                data={ categories } 
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => 
                    <CategoryListItem category={item} onPress={() => {
                        navigation.navigate('Category', {
                            categoryName: item.name,
                            categoryId: item.id
                        })
                    }}/>
                }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  flatList: {
    paddingLeft: 16,
    paddingRight: 16
  }
});
