import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Page1Props {
  navigation: StackNavigationProp<any>;
}

const Page1: React.FC<Page1Props> = ({navigation}) => {
  return (
    <View style={styles.deafultPage}>
      <Button title="Find Recipes" onPress={() => navigation.navigate('Page2')} />
    </View>
  );
}

export default Page1;
