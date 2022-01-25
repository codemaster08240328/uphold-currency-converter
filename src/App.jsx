import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading,
  Text
} from '@chakra-ui/react';
import CurrencyInput from './components/CurrencyInput';
import { Logo } from './components/Logo';
import getTicker from './service/ticker';
import supportedCurrencies from './mock/data';
import { set, fetching } from './redux/currencySlice';
import CurrencyList from './components/CurrencyList';

function App() {
  const [selected, setSelected] = useState('USD');
  const [amount, setAmount] = useState(0);
  const currencies = useSelector((state) => state.currencies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetching());

    const promises = supportedCurrencies.reduce((acc, cur) => {
      if (cur.code !== selected) {
        acc.push(getTicker(`${selected}-${cur.code}`));
      }

      return acc;
    }, []);

    Promise.all(promises).then(res => {
      dispatch(set(res));
    });
  }, [selected, dispatch]);

  const list = useMemo(() => {
    if (!currencies.fetching && currencies.currencies.length > 0) {
      return supportedCurrencies.reduce((acc, cur) => {
        if (selected !== cur.code) {
          acc.push({
            code: cur.code,
            price: amount * currencies.currencies.find(item => item.currency === cur.code).bid
          });
        }

        return acc;
      }, []);
    }

    return [];
  }, [amount, currencies.fetching, currencies.currencies]);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" pt={10}>
          <VStack spacing={8}>
            <Logo h="35px" pointerEvents="none" />
            <Heading>Currency Converter</Heading>
            <Text w="500px" color="gray.500">
              Receive competitive and transparent with no hidden spreads. See how we compare.
            </Text>
            <CurrencyInput
              w="500px"
              types={supportedCurrencies}
              amount={amount}
              onChangeAmount={v => setAmount(v)}
              selected={selected}
              onSelected={v => setSelected(v)}
            />
            { currencies.currencies.length && <CurrencyList list={list} /> }
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
