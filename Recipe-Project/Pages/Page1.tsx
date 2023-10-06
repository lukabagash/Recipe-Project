import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Page1Props {
  navigation: StackNavigationProp<any>;
}

const Page1: React.FC<Page1Props> = ({navigation}) => {
  return (
    <View style={styles.deafultPage}>
      <View style={styles.buttonContainerP1}>
        <TouchableOpacity style={styles.buttonP1} onPress={() => navigation.navigate('Page2')}>
          <Text style={styles.buttonTextP1}>Find Recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Page1;
