import { createGlobalStyle } from 'styled-components';
import { theme } from './';

const joinArrayOfString = (arrayStrings: string[]) =>
  Array.isArray(arrayStrings) ? arrayStrings.join() : '';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after { 
	  box-sizing: border-box;
    outline: none;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${joinArrayOfString(theme.fontFamily.sans)};
  }

  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
  }
  
  h1 {
    font-size: ${theme.fontSize['4xl'][0]};
    line-height: ${theme.fontSize['4xl'][1]};
  } 

  h2 {
    font-size: ${theme.fontSize['3xl'][0]};
    line-height: ${theme.fontSize['3xl'][1]};
  }

  h3 {
    font-size: ${theme.fontSize['2xl'][0]};
    line-height: ${theme.fontSize['2xl'][1]};
  }

  h4 {
    font-size: ${theme.fontSize.xl[0]};
    line-height: ${theme.fontSize.xl[1]};
  }
  
  h5 {
    font-size: ${theme.fontSize.lg[0]};
    line-height: ${theme.fontSize.lg[1]};
  }

  h6 {
    font-size: ${theme.fontSize.base[0]};
    line-height: ${theme.fontSize.base[1]};
  }

  p {
    font-size: ${theme.fontSize.base[0]};
    line-height: ${theme.fontSize.base[1]};
  }

  ul {
    margin: 0;
    padding-left: 0;
  }

  li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
    
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }

  .simplebar-scrollbar::before {
    background-color: ${theme.colors.gray[100]};
  }

  .OverlayModal {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 58px 16px;
    z-index: 10;
  }

  @media (min-width: ${theme.screens.sm}) {
    .OverlayModal {
      padding-top: 10vh;
      padding-bottom: 10vh;
    }
  }

  .ContentModal {
    width: 100%;
    height: 100%;
  }
`;
