import React from 'react';
import { View, Text } from 'react-native';

interface Page2Props {}

const Page2: React.FC<Page2Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 2</Text>
    </View>
  );
}

export default Page2;
