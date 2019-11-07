/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import Button from '../../components/core/Button';
import Input from '../../components/core/TextInput';
import Loader from '../../components/core/Loader';
import {Image} from 'react-native';
import {sendLoginRequest} from '../../actions/login';
import {getAllEnterprises} from '../../actions/login';
import {useSelector, useDispatch} from 'react-redux';

const LoginScreen = props => {
  const {navigation} = props;
  const [isVisible, setIsVisible] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  //mapStateToProps
  const userLogin = useSelector(state => state.login.userLogin);
  const enterprises = useSelector(state => state.enterprise.enterprises);

  //mapDispatchToProps
  const dispatch = useDispatch();

  const submitLogin = () => {
    dispatch(sendLoginRequest(login, password));
    setIsVisible(true);
  };

  //componentDidUpdate
  useEffect(() => {
    if (userLogin !== null) {
      dispatch(getAllEnterprises(userLogin.header));
    }
  }, [userLogin]);
  useEffect(() => {
    if (enterprises !== null) {
      setIsVisible(false);
      navigation.navigate('EnterpriseList');
    }
  }, [enterprises]);

  //state

  //render
  if (isVisible) {
    return (
      <>
        <Loader visible={true} fullscreenLoader={true} />
      </>
    );
  }
  return (
    <>
      <Image
        key="image"
        style={{width: 175, height: 175, alignSelf: 'center'}}
        source={require('../../assets/images/ioasys-logo.png')}
      />
      <Input
        key="inputLogin"
        paddingLeft={'30px'}
        marginLeft={'50px'}
        marginRight={'50px'}
        placeholder={'Login'}
        textContentType={'emailAddress'}
        onChangeText={text => setLogin(text)}
      />
      <Input
        key="inputSenha"
        paddingLeft={'30px'}
        marginTop={'15px'}
        marginLeft={'50px'}
        marginRight={'50px'}
        placeholder={'Senha'}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Button
        key="buttonLogin"
        children={'LOGIN'}
        backgroundColor={'#6144ce'}
        marginLeft={'50px'}
        marginRight={'150px'}
        width={313}
        marginTop={'15px'}
        maxHeight={'auto'}
        onPress={() => submitLogin()}
      />
    </>
  );
};
export default LoginScreen;
