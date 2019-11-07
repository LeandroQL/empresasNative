import React from 'react';
import { Picker, SafeAreaView } from 'react-native';
import FilterForm from './FilterEnterprise';

class FilterEnterprise extends React.Component {
    render() {
        return [
            <SafeAreaView />,
            <FilterForm key="FilterEnterprise"/>,
    ];
    }
}


export default FilterEnterprise
