# [Middleware](https://echo.labstack.com/middleware)

```
Middleware is a function chained in the HTTP request-response cycle with access to Echo#Context which it uses to perform a specific action, for example, logging every request or limiting the number of requests.
``` 

### [echo.Context](https://echo.labstack.com/guide/context/)?

```
echo.Context represents the context of the current HTTP request. It holds request and response reference, path, path parameters, data, registered handler and APIs to read request and write response. As Context is an interface, it is easy to extend it with custom APIs.

```
