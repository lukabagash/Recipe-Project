import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

interface Page5Props {}

const Page5: React.FC<Page5Props> = () => {
  return (
    <View style={styles.defaultPage}>
      <Text>Page 5</Text>
    </View>
  );
}

export default Page5;
