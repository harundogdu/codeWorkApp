import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from '../pages/Jobs';
import JobDetails from '../pages/JobDetails';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{title: 'Jobs', headerTintColor: '#FF5C58'}}
      />
      <Stack.Screen
        name="JobsDetail"
        component={JobDetails}
        options={({route}) => ({
          title: route.params.name,
          headerTintColor: '#FF5C58',
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
