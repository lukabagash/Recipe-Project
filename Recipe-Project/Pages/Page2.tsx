import React, {useContext, useState } from 'react';
import { View, FlatList, TextInput, Text, StyleSheet, TouchableOpacity, Keyboard, Dimensions, SafeAreaView } from 'react-native';
import axios from 'axios';
import { styles, } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { DataContext } from '../DataProvider/DataProvider';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


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
    Keyboard.dismiss(); // Dismiss the keyboard
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>

        <View>
    <HeaderBackButton 
              onPress={() => navigationn.goBack()} 
              labelVisible={false} 
              tintColor="black"
            />
            </View>
        {/* search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Add Ingredients..."
            onChangeText={handleSearch}
            value={searchQuery}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Page3')}>
            <Icon name="search" size={25} color="#000" style={{ margin: 8 }} />
          </TouchableOpacity>
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
      keyboardShouldPersistTaps="always"
      />
    <Text style={styles.selectedItemsLabel}>Ingredients you have</Text>
    <View style={styles.selectedItemsContainer}>
      {selectedItems && selectedItems.map((item, index) => (
        <View key={index} style={styles.selectedItem}>
          <Text style={styles.selectedItemText}>{item}</Text>
          <TouchableOpacity onPress={() => handleRemoveItem(item)} style={styles.removeItemButton}>
            <Text style={styles.removeItemText}>X</Text>
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
    </SafeAreaView>
  );
}

export default Page2;
