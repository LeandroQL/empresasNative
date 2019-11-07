import React, { useEffect, useState, useRef } from 'react';
import { forEach } from 'lodash'
import Card from '../../components/core/Card';
import Input from '../../components/core/TextInput';
import Button from '../../components/core/Button';
import Loader from '../../components/core/Loader';
import { getAllEnterprises, getEnterprisesById, filterEnterprises } from '../../actions/login'
import { useSelector, useDispatch } from 'react-redux';
import { enterprises } from '../../config/enterprises'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

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
    const userLogin = useSelector(state => state.login.userLogin)
    const enterprise = useSelector(state => state.enterprise.enterprise)
    const enterprises = useSelector(state => state.enterprise.enterprises)
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
            dispatch(filterEnterprises(userLogin.header, id, name))
            setId('')
            setName('')
        } else {
            setIsSearched(false)
            setEnterprises(getEnterprises(enterprises))
        }
    }
    useEffect(() => {
        if (filteredEnterprises && isSearched) {
            setEnterprises(getEnterprises(filteredEnterprises))
            setIsVisible(false)
            setIsSearched(false)
        }
    }, [filteredEnterprises])

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
            <Card elevation={15} onPress={() => getEnterpriseDetails(enterprise.id)} list={true} enterprise={enterprise} />
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
                    keyExtractor={item => `${item.id}`}
                    ListHeaderComponent={renderHeader()}
                />
            </SafeAreaView>
        </>
    )
}

export default EnterpriseList