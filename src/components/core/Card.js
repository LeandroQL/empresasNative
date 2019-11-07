import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';

import Button from './Button';

const Card = props => {
  const {enterprise, navigation, details, list} = props;
  return (
    <ScrollView>
      <StyledTouchableOpacity {...props} key="card">
        <StyledText
          textAlign={'center'}
          fontSize={'30px'}
          fontWeight={900}
          paddingLeft={25}
          paddingTop={25}>
          {enterprise.enterprise_name}
        </StyledText>
        <StyledText>País: {enterprise.country}</StyledText>
        <StyledText>Cidade: {enterprise.city}</StyledText>
        {details ? (
          <>
            <StyledText
              textAlign={'justify'}
              lineHeight={55}
              paddingLeft={0}
              paddingRight={25}
              fontSize={25}>
              Quem somos?
            </StyledText>
            <StyledText
              textAlign={'justify'}
              lineHeight={25}
              paddingLeft={0}
              paddingRight={25}>
              {enterprise.description}
            </StyledText>
            <Button
              key="buttonLogin"
              children={'VOLTAR'}
              backgroundColor={'#6144ce'}
              justifyContent={'center'}
              width={313}
              marginTop={'15px'}
              maxHeight={'auto'}
              onPress={() => navigation.goBack()}
            />
          </>
        ) : (
          <></>
        )}
        {list ? (
          <StyledText textAlign={'justify'} paddingRight={25}>
            Share Prices: {enterprise.share_price}
          </StyledText>
        ) : (
          <></>
        )}
      </StyledTouchableOpacity>
    </ScrollView>
  );
};
export default Card;

const StyledText = styled.Text`
  color: ${props => (props.color ? props.color : 'black')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  font-size: ${props => (props.fontSize ? props.fontSize : '16px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 900)};
  line-height: ${props => (props.lineHeight ? props.lineHeight : 35)};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : 0)};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : 0)};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : 0)};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 0)};
`;
const StyledTouchableOpacity = styled.TouchableOpacity`
  border-style: ${props => (props.borderStyle ? props.borderStyle : 'solid')};
  elevation: ${props => (props.elevation ? props.elevation : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 30)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  border-radius: ${props =>
    !props.list && props.borderRadius ? props.borderRadius : 10};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 15)};
  margin-top: ${props => (props.marginTop ? props.marginTop : 15)};
  margin-right: ${props => (props.marginRight ? props.marginRight : 15)};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 15)};
  flex: ${props => (props.flex ? props.flex : 1)};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : 15)};
`;
