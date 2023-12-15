import fs from "node:fs";

console.log("hello word");

const escrita = (dados: string): void => {
  fs.writeFileSync(`teste/bd.json`, dados);
};

const leitura = () => {
  return fs.readFileSync("bd.json", "utf8");
};

const dados = JSON.stringify({
  id: 1,
  cidade: "SP",
});

escrita(dados);
