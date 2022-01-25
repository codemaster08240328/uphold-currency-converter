import SDK from '@uphold/uphold-sdk-javascript';

const UpholdSDK = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: 'foo',
  clientSecret: 'bar'
});

export default UpholdSDK;
