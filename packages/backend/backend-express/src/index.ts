import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import axios, { AxiosResponse } from "axios";
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const apiKey = process.env.WORDS_API_KEY;

app.get("/meaning/:word", async (req: Request, res: Response) => {
  const word = req.params.word;
  const options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };
  try {
    const response: AxiosResponse = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
