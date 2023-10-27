import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DataContext } from '../DataProvider/DataProvider';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

interface Page3Props {}

const Page3: React.FC<Page3Props> = () => {
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
      <View style={styles.deafultPage}>
          <Text>Recipes:</Text>
          {recipes.map(recipe => (
              <Text key={recipe.id}>{recipe.title}</Text>
          ))}
      </View>
  );
}

export default Page3;
