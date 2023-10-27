import React, { useState } from 'react';
import { View, FlatList, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
        <HeaderBackButton onPress={() => navigation.goBack()} />
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
      {selectedItems.length > 0 && (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 10 }}>
          {selectedItems.map((item, index) => (
            <View key={index} style={styles.labelBox}>
              <Text style={styles.labelText}>{item}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
        {/* {selectedItems && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginTop: 10 }}>{selectedItems}</Text>
            <Text> selected</Text>
          </View>
        )}
    </View>
  );
} */}
const labelStyles = StyleSheet.create({
  labelBox: {
    backgroundColor: '#e0e0e0', // light gray background
    borderRadius: 15, // rounded corners
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  labelText: {
    fontSize: 12, // smaller font size
  },
});
export default Page2;
