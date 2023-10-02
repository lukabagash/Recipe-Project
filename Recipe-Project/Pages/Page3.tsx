import React from 'react';
import { View, Text } from 'react-native';

interface Page3Props {}

const Page3: React.FC<Page3Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 3</Text>
    </View>
  );
}

export default Page3;
