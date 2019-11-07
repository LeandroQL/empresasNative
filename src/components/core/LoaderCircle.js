import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components';

const LoaderCircle = props => (
  <LoaderView>
    <ActivityIndicator size="large" color={'#6144ce'} />
  </LoaderView>
);

const LoaderView = styled.View`
  background-color: ${props =>
    props.backgroundColor !== undefined ? props.backgroundColor : 'lightgrey'};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default LoaderCircle;
