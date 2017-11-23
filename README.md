# Example

```shell
$ npm install sensitive-words

```

```javascript
const {sensitiveWords} = require('sensitive-words')
// ES2015 modules
//import {sensitiveWords} from 'sensitive-words'

const filtered = sensitiveWords(
    'The new apple mac book pro will have a touchbar',
    ['pro', 'touchbar']
)
console.log({filtered});
//The new apple mac book *** will have a ***
```
