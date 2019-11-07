import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SPACING from '../../config/spacing';
import TYPOGRAPHY from '../../config/typography';
import COLORS from '../../config/colors';

const TextInput = props => {
  const {children, placeholder} = props;
  return (
    <TextInputStyled
      {...props}
      key="text-input"
      underlineColorAndroid={props.underlineColorAndroid}
      placeholder={placeholder}
      selectionColor={props.selectionColor}>
      {children}
    </TextInputStyled>
  );
};

export default TextInput;

const TextInputStyled = styled.TextInput`
  flex: 1;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  max-height: ${props => props.maxHeight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  margin-top: ${props => (props.label ? 0 : props.marginTop)};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  color: ${props => props.color};
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor};
  ${props => props.typography};
`;

TextInput.defaultProps = {
  height: 48,
  maxHeight: 48,

  paddingTop: SPACING.default,
  paddingBottom: SPACING.default,
  paddingLeft: SPACING.default,
  paddingRight: SPACING.default,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,

  color: COLORS.defaultText,
  placeholderTextColor: COLORS.secondaryText,
  backgroundColor: 'transparent',
  selectionColor: COLORS.primaryWithoutAlpha,
  underlineColorAndroid: 'transparent',
  borderWidth: 1,
  borderColor: COLORS.secondaryText,
  borderRadius: 5,

  typography: TYPOGRAPHY.regularText,
};

TextInput.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  typography: PropTypes.array,
};
