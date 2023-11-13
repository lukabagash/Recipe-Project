import React, { useContext, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { DataContext } from '../DataProvider/DataProvider';
import { View, Text, Image, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { StackNavigationProp } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';


interface Page3Props {
  navigation : StackNavigationProp<any>;
}

const Page3: React.FC<Page3Props> = ({navigation}) => {
  const navigationn = useNavigation();
  const context = useContext(DataContext);
  if (!context) {
      throw new Error("Page3 must be used within a DataProvider");
  }
  const { selectedItems } = context;

  
  const [recipes, setRecipes] = useState<any[]>([]);
  const [isLimitExceeded, setIsLimitExceeded] = useState<boolean>(false);

  useEffect(() => {
      const fetchRecipes = async () => {
          try {
              const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
                  params: {
                      ingredients: selectedItems.join(','),
                      apiKey: '383052fef40e45ab8479cb6f462a8077'
                  }
              });
              setRecipes(response.data);
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

      fetchRecipes();
  }, [selectedItems]);
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFAEE', }}>
        <View style={[styles.header, {backgroundColor: '#FFFAEE', paddingLeft: 8}]}>
            <HeaderBackButton 
              style={styles.backButton} 
              onPress={() => navigationn.goBack()} 
              labelVisible={false} 
              tintColor="#691914"
            />
            {
        isLimitExceeded ? (
          
            <Text style={[styles.headerText, {color: '#691914'}]}>0 Recipes</Text>) : (
              <Text style={[styles.headerText, {color: '#691914'}]}>{recipes.length} Recipes</Text>
            )}
            
        </View>
        {
        isLimitExceeded ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>
          Oops! It looks like we've reached our maximum number of searches for now. Please try again in a little while.
          </Text>
        </View>
      ) : recipes ? (
        <FlatList
            data={recipes}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ backgroundColor: '#FFFAEE' }}
            numColumns={1}  // display 3 boxes per row

            renderItem={({ item: recipe }) => (
                <TouchableOpacity 
                  style={styles.box} 
                  onPress={() => navigation.navigate('Page4', { recipeId: recipe.id })}
                  onPressIn={() => setIsScrollEnabled(false)}
                  onPressOut={() => setIsScrollEnabled(true)}
                >
                  <View style={{ flexDirection: 'row', padding: 3}}>
                  <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imageContainer}>
                          <Image
                            style={styles.image}
                            source={{ uri: `https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg` }}
                          />
                        </View>
                      </View>

                    <View style={{ flex: 3, marginLeft: 13, justifyContent: 'center', position: 'relative', paddingRight: 13 }}>
                        <Text 
                          style={[styles.title, {paddingBottom: 2 }]} // Assign flex value as needed
                        >
                          {recipe.title}
                        </Text>

            
                        <Text style={[styles.likes]}>
                        {recipe.missedIngredients.length} more ingredients needed 
                        </Text>
              
                        <Text style={[styles.likes, { position: 'absolute', bottom: 0, right: 10 }]}>{recipe.likes} likes</Text>
                    </View>
                  </View>
                </TouchableOpacity>

              )}
        />) : (<View style={styles.loadingContainer}>
          <LottieView 
            source={require('../assets/platesfalling.json')} 
            autoPlay 
            loop 
            speed={2}
            style={{ width: 350, height: 350}} // Adjust the size as needed
          />
        </View>)
        }
    </SafeAreaView>
);

}

export default Page3;
