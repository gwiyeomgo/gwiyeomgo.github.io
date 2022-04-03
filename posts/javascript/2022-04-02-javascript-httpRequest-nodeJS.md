https://www.twilio.com/blog/5-ways-to-make-http-requests-in-node-js-using-async-await

https://masteringjs.io/tutorials/node/http-request
https://securityboulevard.com/2020/08/the-httponly-flag-protecting-cookies-against-xss/
https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
https://dololak.tistory.com/165
https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
https://tuhbm.github.io/2019/03/21/axios/
https://yceffort.kr/2021/02/logging-in-nodejs#1-consolelog%EB%A1%9C-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0
### https 
```
const https = require('https');

https.get(url,(res)=>{
    // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });
})
```
