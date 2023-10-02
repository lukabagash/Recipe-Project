import React from 'react';
import { View, Text } from 'react-native';

interface Page4Props {}

const Page4: React.FC<Page4Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 4</Text>
    </View>
  );
}

export default Page4;
