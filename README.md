# unofficial-zero-bounce
unofficial wrapper for zero bounce api

## usage

```
const zeroBounce = require('zero-bounce-unofficial-api')({key: 'api_key'});
validate_email('email', (err, res) => {
  console.log(res);
});
```