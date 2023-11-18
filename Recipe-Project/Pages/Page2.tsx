import React, {useContext, useState } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity, Keyboard, Dimensions, SafeAreaView} from 'react-native';
import axios, { AxiosError } from 'axios';
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

  const [isLimitExceeded, setIsLimitExceeded] = useState<boolean>(false);

  const fetchAutocompleteResults = async (query: string) => {
    try {
      const response = await axios.get('https://api.spoonacular.com/food/ingredients/autocomplete', {
        params: {
          query: query,
          apiKey: '383052fef40e45ab8479cb6f462a8077'
        }
      });
      setAutocompleteResults(response.data.map((item: any) => item.name));
      setIsLimitExceeded(false);
    } catch (error) {
      console.error("API call failed:", error); // Log the error
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log("API response status:", axiosError.response.status)
        if (axiosError.response && axiosError.response.status === 402) {
          setIsLimitExceeded(true);
        }
      }
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (isLimitExceeded) {
      // If limit is exceeded, do not make a new API call
      return;
    }
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
    <SafeAreaView style={[{ flex: 1 }, styles.backgroundColor]}>
    <View style={[{ flex: 1, justifyContent: 'flex-end',}, styles.backgroundColor]}>

    <View style={{ paddingLeft: 5 }}> 
    <HeaderBackButton 
              onPress={() => navigationn.goBack()} 
              labelVisible={false} 
              tintColor="#84251E"
            />
            
            </View>
        {/* search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Add Ingredients..."
            placeholderTextColor="#B4887C"
            onChangeText={handleSearch}
            value={searchQuery}
            onFocus={() => isLimitExceeded && setIsLimitExceeded(true)} // Show error message when search bar is focused
          />
          <TouchableOpacity onPress={() => navigation.navigate('Page3')}>
            <Icon name="search" size={25} color="#84251E" style={{ margin: 8 }} />
          </TouchableOpacity>
        </View>
      
      {isLimitExceeded && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>
            Oops! It looks like we've reached our maximum number of searches for now. Please try again in a little while.
          </Text>
        </View>
      )}
      {/* items list */}
      <FlatList
      contentContainerStyle={styles.flatListContent}
      style={{ height: Dimensions.get('window').height * 0.08 }} // Set the maximum height to 50% of screen height
      data={autocompleteResults}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
          <Text style={styles.listItem}>{item}</Text>
        </TouchableOpacity>
      )}
      keyboardShouldPersistTaps="always"
      />
            <View style={styles.additionalTopBorder}>
              <View style={[styles.textContainer, { shadowOpacity: 0 }]}>
                  <Text style={[styles.topLabel, { shadowOpacity: 0 }]}>Ingredients you have</Text>
                </View>
            </View>
            <View style={styles.anotherBorder}>
            
            </View>
            <FlatList
            contentContainerStyle={styles.selectedItemsContainer}
            data={selectedItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View style={styles.selectedItem}>
                    <Text style={styles.selectedItemText}>{item}</Text>
                    <TouchableOpacity onPress={() => handleRemoveItem(item)} style={styles.removeItemButton}>
                        <Text style={styles.removeItemText}>X</Text>
                    </TouchableOpacity>
                </View>
            )}
        />

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
