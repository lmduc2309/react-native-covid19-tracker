import * as React from 'react';
import {View, Text} from 'react-native';
import Menubar from '../../router/Menubar';

const CountryDaily = () => {
  return (
    <View style={{flex: 1}}>
      <Menubar name="CountryDaily" />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>CountryDaily Screen</Text>
      </View>
    </View>
  );
};

export default CountryDaily;
