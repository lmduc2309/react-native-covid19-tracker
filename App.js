/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyDrawer from './src/Route/Router';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import rootReducer from './src/store/reducers';
import {createStore, applyMiddleware} from 'redux';
import saga from './src/store/sagas';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
sagaMiddleware.run(saga);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Drawer" headerMode="none">
            <Stack.Screen name="Drawer" component={MyDrawer} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Detail} />
            <Stack.Screen name="Dish" component={Dish} />
            <Stack.Screen name="Ingredients" component={Ingredients} />
            <Stack.Screen name="Type" component={Type} />
            <Stack.Screen name="DetectImage" component={DetectImage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
