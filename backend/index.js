const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({
    evento: "SemanaOmnistack 11.0",
    aluno: "Vinicius Dias"
  });
});

app.listen(3333);
