import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { DataProvider } from './DataProvider/DataProvider';


import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'

// Create the stack navigator
const Stack = createStackNavigator();

function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Page1" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name="Page2" component={Page2} />
          <Stack.Screen name="Page3" component={Page3} />
          <Stack.Screen name="Page4" component={Page4} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;
