import React from 'react';
import { SafeAreaView } from 'react-native';
import EnterpriseCard from './EnterpriseCard';

class EnterpriseDetail extends React.Component {
  
  render() {
    return [
      <SafeAreaView key="SafeView"/>,
      <EnterpriseCard navigation={this.props.navigation} enterprise={this.props.enterprise ? this.props.enterprise.enterprise : null} key="EnterpriseCard" />,
    ];
  }
}


export default EnterpriseDetail
