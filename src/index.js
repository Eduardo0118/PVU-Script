import express from "express";
import fetch from "node-fetch";
import open from "open";
import { BuyPlant } from "./actions/actions.js";

import { config, url } from "./http-config/request-config.js";

const app = express();
const port = 3006;

app.listen(port, () => {
  console.log(`Script iniciado na porta ${port}`);
});

//x1490, y136

let oldId;

app.get("/", async (req, res) => {
  try {
    const response = await fetch(url, config);
    const json = await response.json();
    const { data } = json;

    const lowestPrice = data.reduce((acc, loc) =>
      acc.endingPrice < loc.endingPrice ? acc : loc
    );
    const lowestPriceId = lowestPrice.id;
    const price = lowestPrice.endingPrice;

    if (price <= 8 && lowestPriceId !== oldId) {
      oldId = lowestPriceId;

      open(
        `https://marketplace.plantvsundead.com/farm#/plant/${lowestPriceId}`
      );

      BuyPlant();
    }

    res.send({
      status: 200,
      message: "chegou o resultado",
      result: lowestPrice,
    });
  } catch (error) {
    res.send({ status: 400, message: "chegou o erro", result: error });
  }
});

setInterval(() => {
  fetch("http://localhost:3006");
}, 200);

export default app;
