import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import LoginContainer from './LoginScreen';
class LoginScreen extends React.Component {

  render() {
    return [
      <SafeAreaView key="SafeView" />,
      <LoginContainer navigation={this.props.navigation} key="LoginContainer" />,
    ];
  }
}

export default LoginScreen
