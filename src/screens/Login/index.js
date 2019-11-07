import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import LoginContainer from './LoginScreen';

const LoginScreen = props => {
  return (
    <>
      <SafeAreaView key="SafeView" />
      <LoginContainer navigation={props.navigation} key="LoginContainer" />
    </>
  )
}
export default LoginScreen
