# Ip

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Ip/api](https://m3o.com/Ip/api).

Endpoints:

## Lookup

Lookup the geolocation information for an IP address

[https://m3o.com/ip/api#Lookup](https://m3o.com/ip/api#Lookup)

```js
const { IpService } = require("m3o/ip");

const ipService = new IpService(process.env.M3O_API_TOKEN);

// Lookup the geolocation information for an IP address
async function lookupIpInfo() {
  const rsp = await ipService.lookup({
    ip: "93.148.214.31",
  });
  console.log(rsp);
}

lookupIpInfo();
```
