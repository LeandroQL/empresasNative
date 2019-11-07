/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
/* Redux */
import { Provider, useSelector, useDispatch } from 'react-redux'
import { Store } from './src/store/index'
import styled from 'styled-components'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
  Platform,
  AsyncStorage,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import routes from './src/config/routes';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          enabled={Platform.OS === 'ios' ? true : false}>
          <ViewStyled>
            <AppNavigator />
          </ViewStyled>
        </KeyboardAvoidingView>
      </Provider>
    );
  }
};
const AppNavigator = createAppContainer(routes)
const ViewStyled = styled.View`
  flex: 1;
  justify-content: center;
`;
export default App;
