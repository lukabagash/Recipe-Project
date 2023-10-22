import React, { useState } from 'react';
import { View, FlatList, TextInput, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';

interface Page2Props {}

const Page2: React.FC<Page2Props> = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [autocompleteResults, setAutocompleteResults] = useState<string[]>([]);

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

  return (
    <View>
      <View style={styles.headerContainer}>
        <HeaderBackButton onPress={() => navigation.goBack()} />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Ingredients..."
            onChangeText={handleSearch}
            value={searchQuery}
          />
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.flatListContent}
        data={autocompleteResults}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
      />
    </View>
  );
}

export default Page2;
