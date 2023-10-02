import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

interface Page4Props {}

const Page4: React.FC<Page4Props> = () => {
  return (
    <View style={styles.deafultPage}>
      <Text>Page 4</Text>
    </View>
  );
}

export default Page4;
