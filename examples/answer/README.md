# Answer

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Answer/api](https://m3o.com/Answer/api).

Endpoints:

## Question

Ask a question and receive an instant answer

[https://m3o.com/answer/api#Question](https://m3o.com/answer/api#Question)

```js
const { AnswerService } = require("m3o/answer");

const answerService = new AnswerService(process.env.M3O_API_TOKEN);

// Ask a question and receive an instant answer
async function askAquestion() {
  const rsp = await answerService.question({
    query: "microsoft",
  });
  console.log(rsp);
}

askAquestion();
```
