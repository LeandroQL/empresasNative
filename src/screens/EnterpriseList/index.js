import React from 'react';
import { SafeAreaView } from 'react-native';
import EnterpriseList from './EnterpriseList';

const EnterpriseListContainer = props => {
  return (
    <>
      <SafeAreaView key="SafeView" />
      <EnterpriseList navigation={props.navigation} key="EnterpriseList" />
    </>
  )
}

export default EnterpriseListContainer
