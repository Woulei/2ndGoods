// More information here: https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb
import ApiUtils from './apiUtils';

var Api = {
  getItems: function() {
    return fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue'
      })
    })
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
    .catch( e => e)
  },
}
