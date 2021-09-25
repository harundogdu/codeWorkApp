import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {LogBox} from 'react-native';
import FavouriteProvider from './context/FavouriteProvider';
const Router = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  return (
    <FavouriteProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </FavouriteProvider>
  );
};

export default Router;
