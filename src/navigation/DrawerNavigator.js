import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import FavoritedJobs from '../pages/FavoritedJobs';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#FF5C58',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: 'Jobs',
        }}
      />
      <Drawer.Screen
        name="FavoritedJobsPage"
        component={FavoritedJobs}
        options={{title: 'Favorited Jobs', headerTintColor: '#FF5C58'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
