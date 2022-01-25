import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Flex, Text, GridItem } from '@chakra-ui/react';
import supportedCurrencies from '../mock/data';
import CurrencyIcon from './CurrencyIcon';
import { getFormattedValue } from '../utility/helper';

const CurrencyListItem = ({ price, currency }) => {
  return (
    <Flex justifyContent="space-between" data-testid="currency-list-item">
      <Text
        color="gray.500"
        ml="15px"
        fontSize="md"
        data-testid="currency-value-text"
      >
        { getFormattedValue(price, currency.formatting) }
      </Text>
      <Flex w="100px">
        <CurrencyIcon w="25px" currency={currency.code} />
        <Text color="gray.500" ml="8px" fontSize="md" data-testid="currency-code-text">{currency.code}</Text>
      </Flex>
    </Flex>
  );
};

CurrencyListItem.propTypes = {
  price: PropTypes.number,
  currency: PropTypes.object
};

const CurrencyList = ({ list }) => {
  return (
    <Grid w="500px" templateColumns="repeat(1, 1fr)" gap="5">
      {
        list.map(item =>
          <GridItem key={item.code}>
            <CurrencyListItem
              price={item.price}
              currency={supportedCurrencies.find(currency => currency.code === item.code)}
            />
          </GridItem>
        )
      }
    </Grid>
  );
};

CurrencyList.propTypes = {
  list: PropTypes.array
};

export default CurrencyList;
