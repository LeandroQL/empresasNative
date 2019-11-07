import React from 'react';
import Card from '../../components/core/Card';
import {useSelector} from 'react-redux';

const EnterpriseCard = props => {
  const {navigation} = props;
  const userLogin = useSelector(state => state.login.userLogin);
  const enterprise = useSelector(state => state.enterprise.enterprise);
  return (
    <>
      <Card
        navigation={navigation}
        details={true}
        enterprise={enterprise}
        userLogin={userLogin}
      />
    </>
  );
};

export default EnterpriseCard;
