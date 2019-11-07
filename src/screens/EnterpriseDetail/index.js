import React from 'react';
import { SafeAreaView } from 'react-native';
import EnterpriseCard from './EnterpriseCard';

const EnterpriseDetail = props => {
  return (
    <>
      <SafeAreaView key='SafeView' />
      <EnterpriseCard navigation={props.navigation} key="EnterpriseCard" />
    </>
  )
}
export default EnterpriseDetail
