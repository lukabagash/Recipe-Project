import React, { useContext, useEffect, useState, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import { DataContext } from '../DataProvider/DataProvider';
import { View, Text, Image, FlatList, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
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
  const [isLoading, setIsLoading] = useState(true);
  const apiKeys = ['478ac7d46da94ebf86bf83a8d1f4f239', '383052fef40e45ab8479cb6f462a8077', '6f3f815c35c74863bd4bae9ab0e78cbc'];


  useEffect(() => {
      const fetchRecipes = async (apiKeyIndex = 0) => {
        if (apiKeyIndex >= apiKeys.length) {
          // All keys have been tried and failed
          setIsLimitExceeded(true);
          return;
        }
          try {
              const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
                  params: {
                      ingredients: selectedItems.join(','),
                      apiKey: apiKeys[apiKeyIndex]
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
                  fetchRecipes(apiKeyIndex + 1);
                }
                else{ console.error("API call failed:", error);}
              }
            }finally {
              setIsLoading(false); // Set loading to false regardless of success or failure
          }
      };

      fetchRecipes();
  }, [selectedItems]);

  

  const RecipeItem = ({ recipe, onNavigate }: { recipe: any, onNavigate: (route: string, params?: any) => void }) => {
    return (
    <TouchableOpacity 
                  style={styles.box} 
                  onPress={() => navigation.navigate('Page4', { recipeId: recipe.id })}
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

                    <View style={{ flex: 3, marginLeft: 10, justifyContent: 'center', position: 'relative', paddingRight: 13 }}>
                        <Text 
                          style={[styles.title, {paddingBottom: 2 }]} // Assign flex value as needed
                        >
                          {recipe.title}
                        </Text>

            
                        <Text style={[styles.likes, {fontWeight: 'bold', color: '#8B3E3A'}]}>
                        {recipe.missedIngredients.length} more ingredients needed 
                        </Text>
              
                        <View style={{
                          borderWidth: 1, // Make the border more subtle
                          borderColor: '#8B3E3A', // Keep a neutral border color
                          borderRadius: 5, // Smaller rounded corners
                          paddingHorizontal: 5, // Minimal horizontal padding
                          paddingVertical: 2, // Minimal vertical padding
                          paddingBottom: 3,
                          marginTop: 5, // Adjust margin as needed
                          backgroundColor: '#ECA457', // Neutral background color
                          alignSelf: 'flex-start', // Size to content
                          justifyContent: 'center', // Vertically center content
                          alignItems: 'center', // Horizontally center content
                        }}>
                          <Text style={[styles.likes, {
                            fontSize: 14, // Adjust font size as needed
                            color: '#8B3E3A',
                            lineHeight: 14
                          }]}>
                            {recipe.likes} likes
                          </Text>
                        </View>
                    </View>
                  </View>
                </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFAEE', }}>
    <StatusBar backgroundColor="#FFFAEE" barStyle="dark-content" />
{isLoading ? (
      <View style={styles.loadingContainer}>
        <LottieView 
          source={require('../assets/recipe_book.json')} 
          autoPlay 
          loop 
          speed={2}
          style={{ width: 150, height: 150}}
        />
        <Text style={[styles.descriptionTextP1, {marginRight: '12%'}]}>Loading...</Text>
      </View>
    ) : (
      <>
        <View style={[styles.header, {backgroundColor: '#FFFAEE', paddingLeft: 8}]}>
        <TouchableOpacity onPress={() => navigationn.goBack()} style={{ paddingTop: 0, paddingLeft: 10 }}>
              <Icon name="arrow-back" size={30} color="#84251E" />
              </TouchableOpacity>
            <Text style={styles.headerText}>{recipes.length} Recipes</Text>
          </View>
        {
        isLimitExceeded ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>
          Oops! It looks like we've reached our maximum number of searches for now. Please try again in a little while.
          </Text>
        </View>
      ) : (
        <FlatList
            data={recipes}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ backgroundColor: '#FFFAEE' }}
            numColumns={1}  // display 3 boxes per row

            renderItem={({ item: recipe }) => (
              <RecipeItem recipe={recipe} onNavigate={(route, params) => navigation.navigate(route, params)} />
            )}
              />
            )}
            </>
          )}
              
    </SafeAreaView>
);
}

export default Page3;
