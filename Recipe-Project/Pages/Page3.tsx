import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DataContext } from '../DataProvider/DataProvider';
import { View, Text, Image, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { StackNavigationProp } from '@react-navigation/stack';


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
          } catch (error) {
              console.error('Error fetching recipes:', error);
          }
      };

      fetchRecipes();
  }, [selectedItems]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
            <HeaderBackButton onPress={() => navigationn.goBack()} />
            <Text style={styles.headerText}>{recipes.length} Recipes</Text>
        </View>
        <FlatList
            data={recipes}
            keyExtractor={item => item.id.toString()}
            numColumns={3}  // display 3 boxes per row

            renderItem={({ item: recipe }) => (
              <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Page4', { recipeId: recipe.id })}>
                <View >
                    <Image
                        style={styles.image}
                        source={{ uri: `https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg` }}
                    />
                    <Text>{recipe.title}</Text>
                </View>
                </TouchableOpacity>
            )}
        />
    </SafeAreaView>
);

}

export default Page3;
