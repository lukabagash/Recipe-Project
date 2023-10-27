import React, {useContext, useState } from 'react';
import { View, FlatList, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { DataContext } from '../DataProvider/DataProvider';
import { StackNavigationProp } from '@react-navigation/stack';

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
  };
  return (
    <View>
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
        data={autocompleteResults}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <Text style={styles.listItem}>{item}</Text>
          </TouchableOpacity>
        )}
      />
        {selectedItems && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginTop: 10 }}>{selectedItems}</Text>
            <Text> selected</Text>
          </View>
        )}
        <View style={styles.buttonContainerP1}>
        <TouchableOpacity style={styles.buttonP1} onPress={() => navigation.navigate('Page3')}>
          <Text style={styles.buttonTextP1}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Page2;
