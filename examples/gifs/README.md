# Gifs

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Gifs/api](https://m3o.com/Gifs/api).

Endpoints:

## Search

Search for a GIF

[https://m3o.com/gifs/api#Search](https://m3o.com/gifs/api#Search)

```js
const { GifsService } = require("m3o/gifs");

const gifsService = new GifsService(process.env.M3O_API_TOKEN);

// Search for a GIF
async function search() {
  const rsp = await gifsService.search({
    limit: 2,
    query: "dogs",
  });
  console.log(rsp);
}

search();
```
