import React, { useState, useRef, useEffect } from 'react';
import Button from '../../components/core/Button';
import Input from '../../components/core/TextInput';
import Card from '../../components/core/Card';
import Loader from '../../components/core/Loader';
import { Image } from 'react-native';
import { sendLoginRequest } from '../../actions/login'
import { getAllEnterprises } from '../../actions/login'
import { connect, useSelector, useDispatch } from 'react-redux';
import { shallowEqual } from '@babel/types';

class LoginScreen extends React.Component {
  state = { login: '', password: '' }
  async submitLogin() {
    await this.props.sendLoginRequest(this.state.login, this.state.password)
    if (this.props.userLogin && this.props.userLogin.status === 200) {
      await this.props.getAllEnterprises(this.props.userLogin.header)
      if (this.props.status.status && this.props.enterprises) {
        this.props.navigation.navigate('EnterpriseList')
      }
    } else {
      alert('Usuário ou senha incorretos')
    }
  }
  render() {
    const { userLogin, sendLoginRequest } = this.props
    // const [text, onChangeText] = useState('')
    return [
      <Image
        key="image"
        style={{ width: 175, height: 175, alignSelf: 'center' }}
        source={require('../../assets/images/ioasys-logo.png')}
      />,
      <Input
        key="inputLogin"
        paddingLeft={'30px'}
        marginLeft={'50px'}
        marginRight={'50px'}
        placeholder={'Login'}
        textContentType={'emailAddress'}
        onChangeText={text => this.setState({ login: text })}
      />,
      <Input
        key="inputSenha"
        paddingLeft={'30px'}
        marginTop={'15px'}
        marginLeft={'50px'}
        marginRight={'50px'}
        placeholder={'Senha'}
        secureTextEntry={true}
        onChangeText={text => this.setState({ password: text })}
      />,
      <Button
        key="buttonLogin"
        children={'LOGIN'}
        backgroundColor={'#6144ce'}
        marginLeft={'50px'}
        marginRight={'150px'}
        width={313}
        marginTop={'15px'}
        maxHeight={'auto'}
        onPress={() => this.submitLogin()}
      />,
    ];
  }
}
const mapStateToProps = store => ({
  userLogin: store.login.userLogin,
  status: store.enterprise.status,
  enterprises: store.enterprise.enterprises,
});
const mapDispatchToProps = dispatch => ({
  getAllEnterprises: async (header) => dispatch(getAllEnterprises(header)),
  sendLoginRequest: async (login, password) => dispatch(sendLoginRequest(login, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)