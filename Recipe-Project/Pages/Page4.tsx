import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useRoute, RouteProp } from '@react-navigation/native';
import { styles } from '../styles/styles';
import { useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';

// Types and Interfaces
interface Page4Props {}

interface RouteParams {
  recipeId: number;
}

type RootStackParamList = {
  Page4: RouteParams;
};

const Page4: React.FC<Page4Props> = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Page4'>>();
  const recipeId = route.params.recipeId;
  const { width } = useWindowDimensions();
  const navigationn = useNavigation();

  const [recipeDetails, setRecipeDetails] = useState<any>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
          params: {
            apiKey: '383052fef40e45ab8479cb6f462a8077'
          }
        });
        setRecipeDetails(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    if (recipeId) {
      fetchRecipeDetails();
    }
  }, [recipeId]);
  
  const htmlTagStyles = {
    p: {
        marginVertical: 10,
        lineHeight: 22,
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold' as 'bold', // Explicitly cast the type
        marginVertical: 15,
    },
    h2: {
        fontSize: 22,
        fontWeight: 'bold' as 'bold', // Explicitly cast the type
        marginVertical: 12,
    },
    h3: {
        fontSize: 20,
        marginVertical: 10,
    },
    // ... add styles for other tags as needed ...
};
return (
  <SafeAreaView style={styles.containerInstruction}>
    <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 20 }}>
      {recipeDetails ? (
        <View style={styles.recipeContainer}>
          {/* Container for the back button and the image */}
          <View style={styles.headerContainer}>
            <Image
              style={styles.recipeImage}
              source={{ uri: recipeDetails.image }}
            />
            <HeaderBackButton 
    style={styles.backButton} 
    onPress={() => navigationn.goBack()} 
    labelVisible={false} 
    tintColor="black"
/>

          </View>
          <Text style={styles.recipeTitle}>{recipeDetails.title}</Text>
          <HTML 
              source={{ html: recipeDetails.instructions }} 
              contentWidth={width}
              baseStyle={styles.htmlBaseFontStyle}
              tagsStyles={htmlTagStyles}
          />
          <View style={styles.ingredientsList}>
            {recipeDetails.extendedIngredients.map((ingredient: any) => (
              <Text key={ingredient.id} style={styles.ingredientText}>
                {ingredient.name}: {ingredient.amount} {ingredient.unit}
              </Text>
            ))}
          </View>
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
    </ScrollView>
  </SafeAreaView>
);

}

export default Page4;
