import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import colors from '../Themes/Colors';
import {barStyle, fontFamily, fontSize} from '../Themes/Styleconstants';
import ApplicationStyle from '../Themes/ApplicationStyle';

const Menubar = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.toolbar}>
      <StatusBar
        hidden={false}
        backgroundColor={colors.primary}
        barStyle={barStyle.lightContent}
      />
      <TouchableOpacity
        style={styles.viewWrapIcLeft}
        onPress={() => navigation.openDrawer()}>
        <Image
          source={require('../../assets/menu.png')}
          style={{tintColor: '#fff'}}
        />
      </TouchableOpacity>
      <View style={styles.viewWrapTitleToolbar}>
        <Text style={styles.titleToolbar}>{props.name}</Text>
      </View>
      <View style={styles.viewWrapIcRight} />
    </View>
  );
};

export default Menubar;

const styles = StyleSheet.create({
  ...ApplicationStyle,
  titleHeader: {
    fontFamily: fontFamily.demiBold,
    color: colors.charcoalGrey,
    fontSize: fontSize.large,
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  btnGetData: {
    backgroundColor: colors.charcoalGrey,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  textGetData: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.medium,
  },
  viewLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewWrapItem: {
    flexDirection: 'row',
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  textName: {
    marginLeft: 10,
    color: colors.charcoalGrey,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
  },
});
