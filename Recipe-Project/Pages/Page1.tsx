import React from 'react';
import { View, Text } from 'react-native';

interface Page1Props {}

const Page1: React.FC<Page1Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 1</Text>
    </View>
  );
}

export default Page1;
