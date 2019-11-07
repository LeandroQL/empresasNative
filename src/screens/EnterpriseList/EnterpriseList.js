import React, { useEffect, useState, useRef } from 'react';
import { forEach } from 'lodash'
import Card from '../../components/core/Card';
import Input from '../../components/core/TextInput';
import Button from '../../components/core/Button';
import Loader from '../../components/core/Loader';
import { getAllEnterprises, getEnterprisesById, filterEnterprises } from '../../actions/login'
import { isFilteredAction } from '../../actions/enterprise'
import { connect, useSelector, useDispatch } from 'react-redux';
import { enterprises } from '../../config/enterprises'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { shallowEqual } from '@babel/types';

/*class EnterpriseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { id: '', name: '', isSearched: false, enterprises: this.props.enterprises ? this.getEnterprises(this.props.enterprises) : null }
    }
    async getEnterpriseDetails(id) {
        await this.props.getEnterprisesById(id, this.props.userLogin.header)
        if (this.props.status.status === 200) {
            this.props.navigation.navigate('EnterpriseDetail')
        }
    }

    renderCards(enterprise, style) {
        return (
            <Card elevation={15} onPress={() => this.getEnterpriseDetails(enterprise.id)} list={true} key={'ss'} enterprise={enterprise} style={style} />
        )
    }

    getEnterprises(enterprises) {
        const keys = Object.keys(enterprises)
        const array = keys.map(key => {
            return enterprises[key]
        })
        //const array = Object.entries(enterprises)
        return array
    }
    componentDidUpdate(prevProps) {
        if (prevProps.enterprises !== this.props.enterprises && this.state.isSearched) {
            this.setState({
                enterprises: this.getEnterprises(this.props.enterprises),
                isSearched: false,
            })
        }
    }
    async submitSearch() {
        if (this.state.id !== '' || this.state.name !== '') {
            this.setState({
                isSearched: true,
            })
            await this.props.filterEnterprises(this.props.userLogin.header, this.state.id, this.state.name)
        } else {
            this.setState({
                isSearched: true,
            })
            await this.props.getAllEnterprises(this.props.userLogin.header)
        }
    }

    renderHeader() {
        return (
            <View style={{ flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                <View style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingRight: 15, paddingLeft: 15, paddingTop: 45 }}>
                    <Input
                        key="inputLogin"
                        placeholder={'ID'}
                        maxHeight={35}
                        width={'300px'}
                        onChangeText={text => this.setState({ id: text })}
                        marginRight={2}
                    />
                    <Input
                        key="inputName"
                        placeholder={'Name'}
                        width={150}
                        marginRight={2}
                        maxHeight={35}
                        onChangeText={text => this.setState({ name: text })}
                    />
                    <Button
                        key="buttonLogin"
                        children={'BUSCAR'}
                        maxHeight={35}
                        backgroundColor={'#6144ce'}
                        onPress={() => this.submitSearch()}
                        width={125}
                    />
                </View>
            </View>
        )
    }

    render() {
        const style = {
            borderStyle: 'solid',
            elevation: 15,
            flex: 1,
            marginBottom: 30,
            backgroundColor: 'white',
            borderRadius: 10,
            marginLeft: 15,
            marginTop: 15,
            marginRight: 15,
            paddingLeft: 15,
            paddingBottom: 15

        }
        // return <Card details={true} enterprise={this.props.enterprise} style={{elevation: 10, flex: 1}}/>
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.enterprises}
                    renderItem={({ item }) => this.renderCards(item, style)}
                    keyExtractor={item => item ? item.id : ''}
                    ListHeaderComponent={this.renderHeader()}
                />
            </SafeAreaView>
        )
    }
}
const mapStateToProps = store => ({
    userLogin: store.login.userLogin,
    enterprises: store.enterprise.enterprises,
    enterprise: store.enterprise.enterprise,
    status: store.enterprise.status
});
const mapDispatchToProps = dispatch => ({
    getAllEnterprises: async (header) => dispatch(getAllEnterprises(header)),
    getEnterprisesById: async (id, header) => dispatch(getEnterprisesById(id, header)),
    filterEnterprises: async (header, id, name) => dispatch(filterEnterprises(header, id, name))
})
export default connect(mapStateToProps, mapDispatchToProps)(EnterpriseList);

*/

const EnterpriseList = props => {
    //componentDidUpdate
    const getEnterprises = (enterprises) => {
        const keys = Object.keys(enterprises)
        const array = keys.map(key => {
            return enterprises[key]
        })
        return array
    }
    // mapStateToProps
    const userLogin = useSelector(state => state.login.userLogin, shallowEqual)
    const enterprise = useSelector(state => state.enterprise.enterprise, shallowEqual)
    const enterprises = useSelector(state => state.enterprise.enterprises, shallowEqual)
    const status = useSelector(state => state.enterprise.status)
    const filteredEnterprises = useSelector(state => state.enterprise.filteredEnterprises)

    //this.state
    const [stateEnterprises, setEnterprises] = useState(enterprises ? getEnterprises(enterprises) : null)
    const [isVisible, setIsVisible] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [isSearched, setIsSearched] = useState(false)
    const [isFiltered, setIsFiltered] = useState(false)

    //mapDispatchToProps
    const dispatch = useDispatch()

    const usePrevious = (value) => {
        const ref = useRef()
        useEffect(() => {
            ref.current = value
        })
        return ref.current
    }
    const prevEnterprises = usePrevious(enterprises)
    useEffect(() => {
        if (prevEnterprises !== enterprises && isSearched) {
            setEnterprises(getEnterprises(enterprises))
            setIsSearched(false)
        }
    }, [enterprises])
    //functions
    const getEnterpriseDetails = (enterpriseID) => {
        dispatch(getEnterprisesById(enterpriseID, userLogin.header))
        setIsVisible(true)

    }
    const prevEnterprise = usePrevious(enterprise)

    useEffect(() => {
        if (enterprise !== null && prevEnterprise !== enterprise && status.status === 200) {
            setIsVisible(false)
            props.navigation.navigate('EnterpriseDetail')
        }
    }, [enterprise])

    const submitSearch = () => {
        if (id !== '' || name !== '') {
            setIsSearched(true)
            setIsVisible(true)
            dispatch(isFilteredAction(true))
            dispatch(filterEnterprises(userLogin.header, id, name))
        } else {
            setIsSearched(true)
            setIsVisible(true)
            dispatch(isFilteredAction(false))
            dispatch(getAllEnterprises(userLogin.header))
        }
    }
    useEffect(() => {
        if (filteredEnterprises && isSearched) {
            setEnterprises(getEnterprises(filteredEnterprises))
            setIsVisible(false)
            setIsSearched(false)
            dispatch(isFilteredAction(false))
        }
    }, [filteredEnterprises])

    useEffect(() => {
        if (enterprises && isSearched) {
            setEnterprises(getEnterprises(enterprises))
            setIsVisible(false)
            setIsSearched(false)
        }
    }, [isFiltered])

    const renderHeader = () => {
        return (
            <>
                <View style={{ flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <View style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingRight: 15, paddingLeft: 15, paddingTop: 45 }}>
                        <Input
                            key="inputLogin"
                            placeholder={'ID'}
                            maxHeight={35}
                            width={'300px'}
                            onChangeText={text => setId(text)}
                            marginRight={2}
                        />
                        <Input
                            key="inputName"
                            placeholder={'Name'}
                            width={150}
                            marginRight={2}
                            maxHeight={35}
                            onChangeText={text => setName(text)}
                        />
                        <Button
                            key="buttonLogin"
                            children={'BUSCAR'}
                            maxHeight={35}
                            backgroundColor={'#6144ce'}
                            onPress={() => submitSearch()}
                            width={125}
                        />
                    </View>
                </View>
            </>
        )
    }

    const renderCards = (enterprise) => {
        return (
            <Card elevation={15} onPress={() => getEnterpriseDetails(enterprise.id)} list={true} key={enterprise.id} enterprise={enterprise} />
        )
    }
    if (isVisible) {
        return (
            <>
                <Loader visible={true} fullscreenLoader={true} />
            </>
        )
    }
    //render
    return (
        <>
            <SafeAreaView>
                <FlatList
                    data={stateEnterprises}
                    renderItem={({ item }) => renderCards(item)}
                    keyExtractor={item => item ? item.id : ''}
                    ListHeaderComponent={renderHeader()}
                />
            </SafeAreaView>
        </>
    )
}

export default EnterpriseList