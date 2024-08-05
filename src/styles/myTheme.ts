import { type DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  fontSizes: {
    extraSmall: '14px',
    small: '15px',
    small2: '16px',
    mediumSmall: '17px',
    mediumSmall2: '18px',
    medium: '20px',
    large: '22px',
    extraLarge: '24px',
    extraLarge2: '28px',
    extraLarge3: '32px',
    extraLarge4: '34px',
    huge: '50px',
    huge2: '52px',
    huge3: '54px',
    massive: '64px',
  },
  colors: {
    gradientBlack: `linear-gradient(
      90deg,
      #343333 16.73%,
      #484848 58.63%,
      #282828 98.63%
      );`,
    mainBlack: 'rgba(0, 0, 0, 1)',
    lightBlack: 'rgba(57, 57, 57, 1)',
    peach: 'rgba(251, 215, 178, 1)',
    lightPeach: 'rgba(224, 164, 73, 1)',
    orange: 'rgba(241, 121, 0, 1)',
    white: 'rgba(255, 255, 255, 1)',
    whiteBack: 'rgba(250, 250, 250, 1)',
    lightWhite: 'rgba(249, 249, 249, 1)',
    secondWhite: 'rgba(57, 57, 57, 0.05)',
    gray: 'rgba(128, 128, 128, 0.5)',
    lightGray: 'rgba(211, 211, 211, 0.3)',
    red: 'rgba(206, 15, 0, 0.8)',
    input: {
      black: 'rgba(0, 0, 0, 0.75)',
      hover: 'rgba(0, 0, 0, 0.5)',
      focus: 'rgba(0, 0, 0, 1)',
      back: 'rgba(57, 57, 57, 0.1)',
      placeholder: 'rgba(57, 57, 57, 0.5)',
    },
  },
};

export { myTheme };
