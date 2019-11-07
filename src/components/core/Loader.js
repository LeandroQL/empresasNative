import React from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const LoaderCircle = props => (
    <LoaderView >
        <ActivityIndicator size="large" color={'#6144ce'} />
    </LoaderView>
);

const Loader = props => {
    if (props.fullscreenLoader) {
        return (
            <Modal animated animationType="fade" {...props} visible={props.visible}>
                <LoaderCircle {...props} />
            </Modal>
        );
    } else return <LoaderCircle backgroundColor={props.backgroundColor} />;
};

Loader.defaultProps = {
    visible: false
};

Loader.propTypes = {
    visible: PropTypes.bool
};

const LoaderView = styled.View`
  background-color: ${props => (props.backgroundColor !== undefined ? props.backgroundColor : 'lightgrey')};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Loader;
