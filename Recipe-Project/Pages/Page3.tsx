import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

interface Page3Props {}

const Page3: React.FC<Page3Props> = () => {
  return (
    <View style={styles.deafultPage}>
      <Text>Page 3</Text>
    </View>
  );
}

export default Page3;
