export const getCurrencyPlaceHolder = (formatting) => {
  const initValue = 0;

  return initValue.toFixed(formatting.precision).replace('.', formatting.decimal);
};

export const getFormattedValue = (amount, formatting) => {
  const fixedV = Number(amount).toFixed(formatting.precision);
  const lrV = fixedV.split('.');
  const localedStr = Number(lrV[0]).toLocaleString('en-US').replace(/,/g, formatting.grouping);
    
  return `${localedStr}${formatting.decimal}${lrV[1]}`;
};

export const debounce = (func, timeout=300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
};
