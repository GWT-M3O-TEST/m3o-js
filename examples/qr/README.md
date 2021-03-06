# Qr

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Qr/api](https://m3o.com/Qr/api).

Endpoints:

## Generate

Generate a QR code with a specific text and size

[https://m3o.com/qr/api#Generate](https://m3o.com/qr/api#Generate)

```js
const { QrService } = require("m3o/qr");

const qrService = new QrService(process.env.M3O_API_TOKEN);

// Generate a QR code with a specific text and size
async function generateAqrCode() {
  const rsp = await qrService.generate({
    size: 300,
    text: "https://m3o.com/qr",
  });
  console.log(rsp);
}

generateAqrCode();
```
