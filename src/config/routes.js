import LoginScreen from '../screens/Login/index'
import EnterpriseList from '../screens/EnterpriseList/index'
import EnterpriseDetail from '../screens/EnterpriseDetail/index'

import { createStackNavigator } from 'react-navigation-stack'

const routes = {
    Login: LoginScreen,
    EnterpriseList: EnterpriseList,
    EnterpriseDetail: EnterpriseDetail,
}
export default createStackNavigator(routes, {
    headerMode: 'none',
})
