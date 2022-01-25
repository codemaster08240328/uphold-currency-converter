import UpholdSDK from './uphold_sdk';

const getTicker = (pair) => {
  return UpholdSDK.getTicker(pair);
};

export default getTicker;
