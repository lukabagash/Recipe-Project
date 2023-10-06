import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

interface Page2Props {}

const Page2: React.FC<Page2Props> = () => {
  return (
    <View style={styles.deafultPage}>
      <Text>Page 2</Text>
    </View>
  );
}

export default Page2;
