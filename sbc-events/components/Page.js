import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  black: '#393939',
  sbcgreen: '#008c8c',
  grey: '#3a3a3a',
  lightgray: '#e1e1e1',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09'
};

const StyledPage = styled.div`
  background: lightgray;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  border: 1px dashed black;
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing:border-box;
    font-size:10px;
    font-family: "Open Sans",sans-serif;
  }
  *, *:before, *:after {
    box-sizing:inherit;
  }
  body {
    padding:0;
    margin:0;
    font-size:1.5rem;
    line-height:2;
  }
  a{
    text-decoration:none;
    color: ${theme.black}
  }`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
