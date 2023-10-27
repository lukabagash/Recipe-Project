import React, {useContext, useState } from 'react';
import { View, FlatList, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { DataContext } from '../DataProvider/DataProvider';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

interface Page2Props {
  navigation: StackNavigationProp<any>;
}

const Page2: React.FC<Page2Props> = ({navigation}) => {
  const navigationn = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [autocompleteResults, setAutocompleteResults] = useState<string[]>([]);
  const context = useContext(DataContext);
  if (!context) {
      throw new Error("Page2 must be used within a DataProvider"); 
      
  }
  const { selectedItems, setSelectedItems } = context;

  const handleRemoveItem = (itemToRemove: string) => {
    setSelectedItems(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  const fetchAutocompleteResults = async (query: string) => {
    try {
      const response = await axios.get('https://api.spoonacular.com/food/ingredients/autocomplete', {
        params: {
          query: query,
          apiKey: '383052fef40e45ab8479cb6f462a8077'
        }
      });
      setAutocompleteResults(response.data.map((item: any) => item.name));
    } catch (error) {
      console.error('Error fetching autocomplete results:', error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    fetchAutocompleteResults(query);
  };

  const handleItemPress = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems(prevItems => [...prevItems, item]);
    }
    setSearchQuery(''); // Clear the search bar
    setAutocompleteResults([]); // Clear the items list
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <View style={styles.headerContainer}>
        <HeaderBackButton onPress={() => navigationn.goBack()} />
        {/* search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Ingredients..."
            onChangeText={handleSearch}
            value={searchQuery}
          />
        </View>
      </View>
      {/* items list */}
      <FlatList
      contentContainerStyle={styles.flatListContent}
      style={{ maxHeight: Dimensions.get('window').height * 0.4 }} // Set the maximum height to 50% of screen height
      data={autocompleteResults}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
          <Text style={styles.listItem}>{item}</Text>
        </TouchableOpacity>
      )}
    />
    <View style={selectedStyles.selectedItemsContainer}>
      {selectedItems && selectedItems.map((item, index) => (
        <View key={index} style={selectedStyles.selectedItem}>
          <Text>{item}</Text>
          <TouchableOpacity onPress={() => handleRemoveItem(item)} style={selectedStyles.removeItemButton}>
            <Text style={selectedStyles.removeItemText}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={{ height: 20 }} />
    </View>
        <View style={styles.buttonContainerP1}>
        <TouchableOpacity style={styles.buttonP1} onPress={() => navigation.navigate('Page3')}>
          <Text style={styles.buttonTextP1}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 40 }} />
    </View>
  );
}
const selectedStyles = StyleSheet.create({

  selectedItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    height: Dimensions.get('window').height * 0.3, // Set the height to 50% of screen height
  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 4,
    margin: 2,
    borderRadius: 4,
  },
  removeItemButton: {
    marginLeft: 4,
    padding: 2,
  },
  removeItemText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default Page2;
