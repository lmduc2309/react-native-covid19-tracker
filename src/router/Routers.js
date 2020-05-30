import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import Home from '../screens/Home/Home.screens';
import CountryDaily from '../screens/CountryDaily/CountryDaily.screens';

const Drawer = createDrawerNavigator();

const MyRouters = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="CountryDaily" component={CountryDaily} />
    </Drawer.Navigator>
  );
};

export default MyRouters;
