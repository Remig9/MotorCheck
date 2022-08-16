import React, {useEffect} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Screens/home';
import {DrawerMenu} from './helper/menus';

const App = () => {
  const Stack = createStackNavigator();

  const AuthStack = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="DrawerTabScreen" component={DrawerTabScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
  const DrawerTab = createDrawerNavigator();
  const DrawerTabScreen = () => (
    <DrawerTab.Navigator drawerContent={props => <DrawerMenu {...props} />}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="DrawerTabScreen" component={DrawerTabScreen} />
    </DrawerTab.Navigator>
  );

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
