import React from 'react';
import {Modal} from 'react-native';
import LoaderCircle from './LoaderCircle';
import PropTypes from 'prop-types';

const Loader = props => {
  const {fullscreenLoader, visible} = props;
  if (fullscreenLoader) {
    return (
      <Modal animated animationType="fade" {...props} visible={visible}>
        <LoaderCircle {...props} />
      </Modal>
    );
  } else {
    return <LoaderCircle backgroundColor={props.backgroundColor} />;
  }
};

Loader.defaultProps = {
  visible: false,
};

Loader.propTypes = {
  visible: PropTypes.bool,
};

export default Loader;
