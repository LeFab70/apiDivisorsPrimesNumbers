import express from "express";
import dotenv from "dotenv";
import { divisorsOfNumbers, primeNumbers } from "./functions.js";

dotenv.config();
const app = express();
const port = process.env.PORT;
let resp = "";
app.get("/listdiviseurs/:number", (req, res) => {
  const number = req.params.number;
  const reg = new RegExp("^[0-9]+$");

  const listDiviseurs = divisorsOfNumbers(number);
  //console.log(reg.test(number));
  //   if (!reg.test(number)) console.log("merci de fournir un nombre");
  !reg.test(number)
    ? (resp = "le paramètre doit-être un entier positif")
    : (resp = `listes des diviseurs de ${number} : ${listDiviseurs}`);

  res.status(200).send(resp);
});

app.get("/primesNumber", (req, res) => {
  const reg = new RegExp("^[0-9]+$");
  const number = req.query.number;
  //   console.log(reg.test(number));
  //   console.log(number);
  //console.log(primeNumbers(number));
  !reg.test(number)
    ? (resp = "l'argument fourni doit être un nombre entier positif")
    : primeNumbers(number)
    ? (resp = `le nombre ${number} est premier`)
    : (resp = `le nombre ${number} n'est pas premier`);
  res.status(200).send(resp);
});
//console.log(port);
app.listen(port, () => {
  console.log(`vous êtes connecté sur le port ${port}`);
});
