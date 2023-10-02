import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

interface Page1Props {}

const Page1: React.FC<Page1Props> = () => {
  return (
    <View style={styles.deafultPage}>
      <Text>Page 1</Text>
    </View>
  );
}

export default Page1;
