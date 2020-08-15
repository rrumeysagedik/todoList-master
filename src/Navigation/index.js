import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// pages
import ListPage from '../Pages/ListPage';
import ListDetail from '../Pages/ListDetail';
import ListItemUpdate from '../Pages/ListItemUpdate';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListPage" headerMode="none">
        <Stack.Screen name="ListPage" component={ListPage} />
        <Stack.Screen name="ListDetail" component={ListDetail} />
        <Stack.Screen name="ListItemUpdate" component={ListItemUpdate} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
