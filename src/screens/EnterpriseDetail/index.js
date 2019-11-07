import React from 'react';
import {SafeAreaView} from 'react-native';
import EnterpriseCard from './EnterpriseCard';

const EnterpriseDetail = props => {
  const {navigation} = props;
  return (
    <>
      <SafeAreaView key="SafeView" />
      <EnterpriseCard navigation={navigation} key="EnterpriseCard" />
    </>
  );
};
export default EnterpriseDetail;
