import React from 'react'
import { Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TYPOGRAPHY from '../../config/typography'
import COLORS from '../../config/colors'
import Button from './Button'

const Card = props => {
  return (
    <ScrollView>
      <StyledTouchableOpacity {...props} key='card'>
        <StyledText textAlign={'center'} fontSize={'30px'} fontWeight={900} paddingLeft={25} paddingTop={25}>{props.enterprise.enterprise_name}</StyledText>
        <StyledText >País: {props.enterprise.country}</StyledText>
        <StyledText>Cidade: {props.enterprise.city}</StyledText>
        {props.details && props.navigation ?
          <>
            <StyledText textAlign={'justify'} lineHeight={55} paddingLeft={25} paddingRight={25} fontSize={25}>Quem somos?</StyledText>
            <StyledText textAlign={'justify'} lineHeight={25} paddingLeft={25} paddingRight={25}>{props.enterprise.description}</StyledText>
            <Button
              key="buttonLogin"
              children={'VOLTAR'}
              backgroundColor={'#6144ce'}
              marginLeft={'50px'}
              marginRight={'150px'}
              width={313}
              marginTop={'15px'}
              maxHeight={'auto'}
              onPress={() => props.navigation.navigate('EnterpriseList')}
            />
          </>
          :
          <></>
        }
        {props.list ?
          <StyledText textAlign={'justify'} paddingRight={25} >Share Prices: {props.enterprise.share_price}</StyledText>
          :
          <></>
        }
      </StyledTouchableOpacity>
    </ScrollView>
  );
};
export default Card;

const StyledText = styled.Text`
color: ${props => props.color ? props.color : 'black'};
textAlign: ${props => props.textAlign ? props.textAlign : 'left'};
fontSize: ${props => props.fontSize ? props.fontSize : '16px'};
fontWeight: ${props => props.fontWeight ? props.fontWeight : 900};
lineHeight: ${props => props.lineHeight ? props.lineHeight : 35};
paddingTop: ${props => props.paddingTop ? props.paddingTop : 0};
paddingRight: ${props => props.paddingRight ? props.paddingRight : 0};
paddingBottom: ${props => props.paddingBottom ? props.paddingBottom : 0};
paddingLeft: ${props => props.paddingLeft ? props.paddingLeft : 0};
`
const StyledTouchableOpacity = styled.TouchableOpacity`
borderStyle: ${props => props.borderStyle ? props.borderStyle : 'solid'};
elevation: ${props => props.elevation ? props.elevation : 0};
marginBottom: ${props => props.marginBottom ? props.marginBottom : 30};
backgroundColor: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
borderRadius: ${props => !props.list && props.borderRadius ? props.borderRadius : 10};
marginLeft: ${props => props.marginLeft ? props.marginLeft : 15};
marginTop: ${props => props.marginTop ? props.marginTop : 15};
marginRight: ${props => props.marginRight ? props.marginRight : 15};
paddingLeft: ${props => props.paddingLeft ? props.paddingLeft : 15};
flex: ${props => props.flex ? props.flex : 1};
paddingBottom: ${props => props.paddingBottom ? props.paddingBottom : 15};
`
