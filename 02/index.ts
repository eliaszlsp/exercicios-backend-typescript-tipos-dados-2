import fs from "node:fs";
import { Endereco, Usuario } from "./types";
const endereco: Endereco = {
  cep: "08131220",
  rua: "estudante da China",
  bairro: "Itaim Paulista",
  cidade: "SP",
};

const usuario: Usuario = {
  nome: "jose",
  email: "jose@gmail.com",
  cpf: "32165498778",
  profissao: "dev full stack",
  endereco: endereco,
};

const escrita = (dados: string): void => {
  fs.writeFileSync(`bd.json`, dados);
};

const leitura = (): Usuario[] => {
  const file = fs.readFileSync("bd.json", "utf8");
  return JSON.parse(file);
};

const cadastrarUsuario = (dados: Usuario): Usuario[] => {
  const db = leitura();
  db.push(dados);
  escrita(JSON.stringify(db));
  return db;
};

const listarUsuarios = (): Usuario[] => {
  return leitura();
};

console.log(cadastrarUsuario(usuario));
