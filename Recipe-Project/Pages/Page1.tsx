import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Page1Props {
  navigation: StackNavigationProp<any>;
}

const Page1: React.FC<Page1Props> = ({navigation}) => {
  return (
    <View style={styles.defaultPage}>
      <View style={styles.spacerP2}></View>
      <Image source={require('../assets/recipe.png')} style={{ width: 400, height: 400,position: 'relative'}} />
      <View style={styles.spacerP1}></View>
      <Text style={styles.titleTextP1}>Cook Up!</Text>
      <Text style={styles.descriptionTextP1}>3000+ easy and delicious recipes from best chefs around the world.</Text>
      <View style={styles.buttonContainerP1}>
        <TouchableOpacity style={styles.buttonP1} onPress={() => navigation.navigate('Page2')}>
          <Text style={styles.buttonTextP1}>Find Recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Page1;
