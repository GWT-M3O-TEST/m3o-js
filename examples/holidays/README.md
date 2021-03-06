# Holidays

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Holidays/api](https://m3o.com/Holidays/api).

Endpoints:

## Countries

Get the list of countries that are supported by this API

[https://m3o.com/holidays/api#Countries](https://m3o.com/holidays/api#Countries)

```js
const { HolidaysService } = require("m3o/holidays");

const holidaysService = new HolidaysService(process.env.M3O_API_TOKEN);

// Get the list of countries that are supported by this API
async function listCountries() {
  const rsp = await holidaysService.countries({});
  console.log(rsp);
}

listCountries();
```

## List

List the holiday dates for a given country and year

[https://m3o.com/holidays/api#List](https://m3o.com/holidays/api#List)

```js
const { HolidaysService } = require("m3o/holidays");

const holidaysService = new HolidaysService(process.env.M3O_API_TOKEN);

// List the holiday dates for a given country and year
async function getHolidays() {
  const rsp = await holidaysService.list({
    country_code: "GB",
    year: 2022,
  });
  console.log(rsp);
}

getHolidays();
```
