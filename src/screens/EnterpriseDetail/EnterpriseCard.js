import React from 'react'
import Button from '../../components/core/Button'
import Input from '../../components/core/TextInput'
import Card from '../../components/core/Card'
import { Image } from 'react-native'
import { connect, useSelector, useDispatch } from 'react-redux'
import { getEnterprisesById } from '../../actions/login'

const EnterpriseCard = props => {
  const userLogin = useSelector(state => state.login.userLogin)
  const enterprise = useSelector(state => state.enterprise.enterprise)

  return (
    <>
      <Card navigation={props.navigation} details={true} enterprise={enterprise} userLogin={userLogin} />
    </>
  )
}

export default EnterpriseCard