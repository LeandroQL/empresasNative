import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginContainer from './LoginScreen';

const LoginScreen = props => {
  const {navigation} = props;
  return (
    <>
      <SafeAreaView key="SafeView" />
      <LoginContainer navigation={navigation} key="LoginContainer" />
    </>
  );
};
export default LoginScreen;
