import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react';

const CurrencyIcon = ({ currency, ...props }) => 
  <Image
    srcSet={`/icons/${currency}.png, /icons/${currency}@2x.png 2x, /icons/${currency}@3x.png 3x`}
    src={`/icons/${currency}@3x.png`}
    alt="currency"
    {...props}
    data-testid="currency-icon"
  />;

CurrencyIcon.propTypes = {
  currency: PropTypes.string
};

export default CurrencyIcon;
