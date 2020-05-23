import * as React from 'react';
import {View, Text} from 'react-native';
import Menubar from '../../router/Menubar';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Menubar name="Home" />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    </View>
  );
};

export default Home;
