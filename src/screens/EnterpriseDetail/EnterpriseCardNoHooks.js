import React from 'react'
import Button from '../../components/core/Button'
import Input from '../../components/core/TextInput'
import Card from '../../components/core/Card'
import { Image } from 'react-native'
import { connect, useSelector, useDispatch } from 'react-redux'
import { getEnterprisesById } from '../../actions/login'

class EnterpriseCard extends React.Component {

    render() {
        return <Card navigation={this.props.navigation} details={true} enterprise={this.props.enterprise} />
    }
}
const mapStateToProps = store => ({
    userLogin: store.login.userLogin,
    enterprise: store.enterprise.enterprise,
});
const mapDispatchToProps = dispatch => ({
    getEnterprisesById: async (id, header) => dispatch(getEnterprisesById(id, header))
})
export default connect(mapStateToProps, mapDispatchToProps)(EnterpriseCard)
