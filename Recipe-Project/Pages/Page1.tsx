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
    <View style={styles.deafultPage}>
      <Image source={require('../assets/recipe5.png')} style={{ width: 300, height: 300,position: 'relative', top: 150}} />
      <View style={styles.spacerP1}></View>
      <View style={styles.buttonContainerP1}>
        <TouchableOpacity style={styles.buttonP1} onPress={() => navigation.navigate('Page2')}>
          <Text style={styles.buttonTextP1}>Find Recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Page1;
