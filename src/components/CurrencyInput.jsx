import { 
  Input,
  Select,
  Image,
  Flex,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import dropdown from '../assets/dropdown-icon.svg';
import CurrencyIcon from './CurrencyIcon';
import { debounce, getCurrencyPlaceHolder, getFormattedValue } from '../utility/helper';
import supportedCurrencies from '../mock/data';

const CurrencyInput = ({ selected, onSelected, amount, onChangeAmount, ...props }) => {
  const [editing, setEditing] = useState(false);
  const [price, setPrice] = useState(amount);
  const selectedCurrencyObj = useMemo(() => supportedCurrencies.find(type => type.code === selected), [selected]);

  const appliedDebounce = useCallback(debounce((v) => onChangeAmount(v), 300), []);

  const onChange = useCallback((v) => {
    setPrice(v);
    appliedDebounce(v);
  }, [setPrice, appliedDebounce]);

  return(
    <InputGroup borderRadius="5px" bgColor="gray.100" {...props}>
      {
        editing ?
          <Input
            borderColor="transparent"
            placeholder={getCurrencyPlaceHolder(selectedCurrencyObj.formatting)}
            pr="7.5rem"
            onChange={(e) => onChange(e.target.value)}
            value={price}
            type="number"
            color="gray.500"
            fontWeight="bold"
            onBlur={() => setEditing(!editing)}
            data-testid="number-input"
          /> :
          <Input
            borderColor="transparent"
            pr="7.5rem"
            value={getFormattedValue(price, selectedCurrencyObj.formatting)}
            type="text"
            onFocus={() => setEditing(!editing)}
            color="gray.500"
            fontWeight="bold"
            readOnly
            data-testid="text-input"
          />
      }

      <InputRightElement width="7rem" >
        <Flex
          justifyContent="center"
          bgColor="white"
          alignItems="center"
          borderRadius="30px"
          pl="10px"
        >
          <CurrencyIcon
            currency={selected}
            w="20px"
          />
          <Select
            icon={<Image src={dropdown} />}
            iconSize={10}
            size="sm"
            borderColor="transparent"
            defaultValue={selected}
            onChange={(e) => onSelected(e.target.value)}
            focusBorderColor="transparent"
            data-testid="currency-select"
          >
            {
              supportedCurrencies.map((type) => 
                <option key={`${type.code}`} value={type.code}>{type.code}</option>
              )
            }
          </Select>
        </Flex>
      </InputRightElement>
    </InputGroup>
  );
};

CurrencyInput.propTypes = {
  selected: PropTypes.string,
  onSelected: PropTypes.func,
  amount: PropTypes.number,
  onChangeAmount: PropTypes.func
};

export default CurrencyInput;
