import React from 'react';
import { View, Text } from 'react-native';

interface Page5Props {}

const Page5: React.FC<Page5Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 5</Text>
    </View>
  );
}

export default Page5;
