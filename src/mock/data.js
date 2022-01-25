const supportedCurrencies = [{
  'code': 'BTC',
  'formatting': {
    'decimal': '.',
    'format': '__symbol__ __value__ __code__',
    'grouping': ',',
    'precision': 8
  },
  'name': 'Bitcoin',
  'status': 'open',
  'symbol': '₿',
  'type': 'cryptocurrency'
},
{
  'code': 'USD',
  'formatting': {
    'decimal': '.',
    'format': '__symbol__ __value__ __code__',
    'grouping': ',',
    'precision': 2
  },
  'name': 'US Dollar',
  'status': 'open',
  'symbol': '$',
  'type': 'fiat'
},
{
  'code': 'AED',
  'features': [
    'buy',
    'deposit',
    'sell',
    'transfer',
    'withdraw'
  ],
  'formatting': {
    'decimal': '.',
    'format': '__code__ __value__ __symbol__',
    'grouping': ',',
    'precision': 2
  },
  'image': 'https://cdn.uphold.com/assets/AED.svg',
  'name': 'Emirati Dirham',
  'status': 'open',
  'symbol': 'د.إ',
  'type': 'fiat'
},{
  'code': 'ARS',
  'features': [
    'buy',
    'deposit',
    'sell',
    'transfer',
    'withdraw'
  ],
  'formatting': {
    'decimal': '.',
    'format': '__symbol__ __value__ __code__',
    'grouping': ',',
    'precision': 2
  },
  'image': 'https://cdn.uphold.com/assets/ARS.svg',
  'name': 'Argentine Peso',
  'status': 'open',
  'symbol': '$',
  'type': 'fiat'
},{
  'code': 'AUD',
  'features': [
    'buy',
    'deposit',
    'sell',
    'transfer',
    'withdraw'
  ],
  'formatting': {
    'decimal': '.',
    'format': '__symbol__ __value__ __code__',
    'grouping': ',',
    'precision': 2
  },
  'image': 'https://cdn.uphold.com/assets/AUD.svg',
  'name': 'Australian Dollar',
  'status': 'open',
  'symbol': '$',
  'type': 'fiat'
},{
  'code': 'CAD',
  'features': [
    'buy',
    'deposit',
    'sell',
    'transfer',
    'withdraw'
  ],
  'formatting': {
    'decimal': '.',
    'format': '__symbol__ __value__ __code__',
    'grouping': ',',
    'precision': 2
  },
  'image': 'https://cdn.uphold.com/assets/CAD.svg',
  'name': 'Canadian Dollar',
  'status': 'open',
  'symbol': '$',
  'type': 'fiat'
},{
  'code': 'ETH',
  'features': [
    'buy',
    'deposit',
    'sell',
    'transfer',
    'withdraw'
  ],
  'formatting': {
    'decimal': '.',
    'format': '__symbol__ __value__ __code__',
    'grouping': ',',
    'precision': 18
  },
  'image': 'https://cdn.uphold.com/assets/ETH.svg',
  'name': 'Ether',
  'status': 'open',
  'symbol': 'Ξ',
  'type': 'cryptocurrency'
},{
  'code': 'EUR',
  'features': [
    'buy',
    'deposit',
    'sell',
    'transfer',
    'withdraw'
  ],
  'formatting': {
    'decimal': '.',
    'format': '__symbol__ __value__ __code__',
    'grouping': ',',
    'precision': 2
  },
  'image': 'https://cdn.uphold.com/assets/EUR.svg',
  'name': 'Euro',
  'status': 'open',
  'symbol': '€',
  'type': 'fiat'
}];

export default supportedCurrencies;
