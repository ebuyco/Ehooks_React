import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';

const theme = {
      black: '#393939',
      grey: '#3A3A3A',
      white: '#ffffff',
      base:  '#0072B9',
      maxWidth: '100%'
}

const StyledPage = styled.div`
      color: ${(props) => props.theme.black};

`;


const InnerPage = styled.div`
      max-width: ${(props) => props.theme.maxWidth};
      margin: 0 auto;

`;
