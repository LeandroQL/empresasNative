import React from 'react';
import { SafeAreaView } from 'react-native';
import EnterpriseList from './EnterpriseList';
class EnterpriseListContainer extends React.Component {
  render() {
    return [
      <SafeAreaView key="SafeView"/>,
      <EnterpriseList enterprise={this.props.enterprise} navigation={this.props.navigation} userLogin={this.props.userLogin} key="EnterpriseList" />,
    ];
  }
}


export default EnterpriseListContainer
