import React, {useContext, useState } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity, Keyboard, Dimensions, SafeAreaView, StatusBar, TouchableWithoutFeedback, KeyboardAvoidingView, Platform} from 'react-native';
import axios, { AxiosError } from 'axios';
import { styles, } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { DataContext } from '../DataProvider/DataProvider';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { BoxShadow } from 'react-native-shadow';
import { ScreenWidth } from 'react-native-elements/dist/helpers';


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

  const shadowOpt = {
    width: ScreenWidth, // Width of the view where you're applying the shadow
    height: 37, // Height of the view where you're applying the shadow
    color: "#84251E", // Shadow color
    border: 13, // Border radius
    radius: 10, // Blur radius
    opacity: 0.13, // Shadow opacity
    x: 0, // Offset x
    y: -2, // Offset y
    style: { marginVertical: 3 } // Additional style for the shadow
  };

  return (
    <SafeAreaView style={[{ flex: 1 }, styles.backgroundColor]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={[{ flex: 1, justifyContent: 'flex-end',}, styles.backgroundColor]}>
    <StatusBar backgroundColor="#FFFAEE" barStyle="dark-content" />
    <View style={{ paddingLeft: 5 }}> 
            <TouchableOpacity onPress={() => navigationn.goBack()} style={{ paddingTop: 3, paddingLeft: 10 }}>
              <Icon name="left" size={30} color="#84251E" />
              </TouchableOpacity>
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
            <Icon name="search1" size={25} color="#84251E" style={{ textShadowColor: '#84251E',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 1, margin: 8 }} />
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
          <BoxShadow setting={shadowOpt}>
            <View style={styles.additionalTopBorder}>
              <View style={[styles.textContainer]}>
                  <Text style={[styles.topLabel]}>My Pantry</Text>
                </View>
            </View>
            </BoxShadow>
            
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
        </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default Page2;
