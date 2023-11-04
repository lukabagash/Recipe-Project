import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, LogBox } from 'react-native';
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
LogBox.ignoreLogs(['Warning: Encountered two children with the same key, `1001`.']);

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
        lineHeight: 52,
    },
    h1: {
        fontSize: 26,
        fontWeight: 'bold' as 'bold', // Explicitly cast the type
        marginVertical: 15,
    },
    h2: {
        fontSize: 26,
        fontWeight: 'bold' as 'bold', // Explicitly cast the type
        marginVertical: 12,
    },
    h3: {
        fontSize: 26,
        marginVertical: 10,
    },
    // ... add styles for other tags as needed ...
};
return (
  <SafeAreaView style={styles.containerInstruction}>
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={{backgroundColor: '#FFFAEE'}}>
      {recipeDetails ? (
        <>
          {/* Image Container */}
          <View >
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

          {/* Title and Summary */}
          <View style={[styles.recipeContainer, styles.spaceBelow]}>
            <Text style={styles.recipeTitle}>{recipeDetails.title}</Text>
            {recipeDetails.summary && (
                <HTML 
                  source={{ html: recipeDetails.summary.split("Users who liked this recipe also liked")[0]}} 
                  contentWidth={width}
                  baseStyle={styles.htmlBaseFontStyle}
                  tagsStyles={htmlTagStyles}
                />
              )}
          </View>

          {/* Ingredients Container */}
          <View style={[styles.recipeContainer, styles.spaceBelow]}>
            {recipeDetails.extendedIngredients.map((ingredient: any) => (
              <Text key={ingredient.id} style={styles.ingredientText}>
                {ingredient.name}: {ingredient.amount} {ingredient.unit}
              </Text>
            ))}
          </View>

          {/* Instructions Container */}
          <View style={[styles.recipeContainer]}>
            <HTML 
                source={{ html: recipeDetails.instructions }} 
                contentWidth={width}
                baseStyle={styles.htmlBaseFontStyle}
                tagsStyles={htmlTagStyles}
            />
          </View>

        </>
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
    </ScrollView>
  </SafeAreaView>
);


}

export default Page4;
