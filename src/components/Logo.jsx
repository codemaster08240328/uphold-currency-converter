import React from 'react';
import { Image } from '@chakra-ui/react';
import logo from '../assets/logo.svg';

export const Logo = props => {
  return <Image data-testid="logo-icon" src={logo} {...props} />;
};
