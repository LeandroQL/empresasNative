import {css} from 'styled-components';

// Available font sizes
const FONT_SIZE = {
  large: 22,
  medium: 16,
  regular: 14,
  small: 12,
};

// Available font families
// const FONT_FAMILY = {
//   NunitoExtraLight: css`
//     ${'' /* font-family: Nunito-ExtraLight; */}
//   `,
//   NunitoLight: css`
//     ${'' /* font-family: Nunito-Light; */}
//   `,
//   NunitoRegular: css`
//     ${'' /* font-family: Nunito-Regular; */}
//   `,
//   NunitoMedium: css`
//     ${'' /* font-family: Nunito-Medium; */}
//   `,
//   NunitoSemiBold: css`
//     ${'' /* font-family: Nunito-Medium; */}
//   `,
//   NunitoBold: css`
//     ${'' /* font-family: Nunito-Bold; */}
//   `,
//   NunitoExtraBold: css`
//     ${'' /* font-family: Nunito-Medium; */}
//   `,
//   NunitoBlack: css`
//     ${'' /* font-family: Nunito-Medium; */}
//   `
// };

const TYPOGRAPHY = {
  largeText: css`
    font-size: ${FONT_SIZE.large};
    font-weight: normal;
  `,
  largeTextSemibold: css`
    font-size: ${FONT_SIZE.large};
    font-weight: 700;
  `,
  largeTextBold: css`
    font-size: ${FONT_SIZE.large};
    font-weight: bold;
  `,
  regularText: css`
    font-size: ${FONT_SIZE.regular};
    font-weight: normal;
  `,
  regularTextSemibold: css`
    font-size: ${FONT_SIZE.regular};
    font-weight: 700;
  `,
  regularTextBold: css`
    font-size: ${FONT_SIZE.regular};
    font-weight: bold;
  `,
  mediumText: css`
    font-size: ${FONT_SIZE.medium};
    font-weight: normal;
  `,
  mediumTextSemibold: css`
    font-size: ${FONT_SIZE.medium};
    font-weight: 700;
  `,
  mediumTextBold: css`
    font-size: ${FONT_SIZE.medium};
    font-weight: bold;
  `,
  smallText: css`
    font-size: ${FONT_SIZE.small};
  `,
  smallTextSemibold: css`
    font-size: ${FONT_SIZE.small};
    font-weight: 700;
  `,
  smallTextBold: css`
    font-size: ${FONT_SIZE.small};
    font-weight: bold;
  `,
};

export default TYPOGRAPHY;
