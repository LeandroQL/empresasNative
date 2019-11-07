import React from 'react';
import { View } from 'react-native'
import Button from '../../components/core/Button';
import PropTypes from 'prop-types';
import Input from '../../components/core/TextInput';
import { connect } from 'react-redux';
import { getEnterprisesById } from '../../actions/login'
import { filterEnterprises } from '../../actions/login'
class FilterForm extends React.Component {
  state = { id: '', name: '' }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
        <View style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingRight: 15, paddingLeft: 15, paddingTop: 45 }}>
          <Input
            key="inputLogin"
            placeholder={'ID'}
            maxHeight={35}
            width={'300px'}
            marginRight={2}
            onChangeText={text => this.setState({id: text})}
          />
          <Input
            key="inputSenha"
            placeholder={'Tipo'}
            width={150}
            marginRight={2}
            onChangeText={text => this.setState({name: text})}
            maxHeight={35}
          />
          <Button
            key="buttonLogin"
            children={'BUSCAR'}
            maxHeight={35}
            backgroundColor={'#6144ce'}
            width={125}
          />
        </View>
      </View>
    )
  }
}
const mapStateToProps = store => ({
  userLogin: store.login.userLogin,
});
const mapDispatchToProps = dispatch => ({
  getEnterprisesById: async (id, header) => dispatch(getEnterprisesById(id, header))
})
export default connect(mapStateToProps, mapDispatchToProps)(FilterForm)
