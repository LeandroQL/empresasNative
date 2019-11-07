import React from 'react';
import {SafeAreaView} from 'react-native';
import EnterpriseList from './EnterpriseList';

const EnterpriseListContainer = props => {
  const {navigation} = props;
  return (
    <>
      <SafeAreaView key="SafeView" />
      <EnterpriseList navigation={navigation} key="EnterpriseList" />
    </>
  );
};

export default EnterpriseListContainer;
