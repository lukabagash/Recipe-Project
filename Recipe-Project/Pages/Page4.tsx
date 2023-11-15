import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, LogBox, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useRoute, RouteProp } from '@react-navigation/native';
import { styles } from '../styles/styles';
import { useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import LottieView from 'lottie-react-native';

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
  const [isLimitExceeded, setIsLimitExceeded] = useState<boolean>(false);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
          params: {
            apiKey: '383052fef40e45ab8479cb6f462a8077'
          }
        }); 
        setRecipeDetails(response.data);
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
  <SafeAreaView style={[styles.containerInstruction, styles.backgroundColor]}>
    {isLimitExceeded ? (
      <View>
        <HeaderBackButton 
          style={[styles.backButton]} 
          onPress={() => navigationn.goBack()} 
          labelVisible={false} 
          tintColor="#84251E"
        />
        <View style={[styles.errorContainer, {marginTop: 50}]}>
          <Text style={styles.errorMessage}>
            Oops! It looks like we've reached our maximum number of searches for now. Please try again in a little while.
          </Text>
        </View>
      </View>
    ) : recipeDetails && recipeId ? (
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={{backgroundColor: '#FFFAEE'}}>
        {/* Image Container */}
        <View>
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
          <View style={[styles.lineStyle,{marginBottom: 20}]} />
          {recipeDetails.summary && (
            <HTML 
              source={{ html: recipeDetails.summary}} 
              contentWidth={width}
              baseStyle={styles.htmlBaseFontStyle}
              tagsStyles={htmlTagStyles}
            />
          )}
        </View>

        {/* Ingredients Container */}
        <View style={[styles.recipeContainer, styles.spaceBelow]}>
        <Text style={styles.title4}>Ingredient</Text>
        <View style={[styles.lineStyle, {marginBottom: 20}]} />
        {recipeDetails.extendedIngredients.map((ingredient: any, index: number) => (
        <Text key={`${ingredient.id}-${index}`} style={styles.ingredientText}>
          {ingredient.name}: {ingredient.amount} {ingredient.unit}
        </Text>
        ))}
        
        </View>
        {/* Instructions Container */}
        <View style={[styles.instContainer]}>
          <Text style={[styles.title4, {marginLeft: 15, marginTop: 15}]}>Instruction</Text>
          <View style={[styles.lineStyle, {width: '92%', alignSelf: 'center'}]} />
          <HTML 
            source={{ html: recipeDetails.instructions }} 
            contentWidth={width}
            baseStyle={styles.htmlBaseFontStyle2}
            tagsStyles={htmlTagStyles}
          />
        </View>
      </ScrollView>
    ) : (
      <View style={styles.loadingContainer}>
        <LottieView 
          source={require('../assets/pan2.json')} 
          autoPlay 
          loop 
          speed={3}
          style={{ width: 150, height: 150}}
        />
        <Text style={[styles.descriptionTextP1, {marginRight: '12%'}]}>Loading...</Text>
      </View>
    )}
  </SafeAreaView>
);
}

export default Page4;
