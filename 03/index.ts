import { Usuario } from "./types";

import fs from "node:fs";

const leitura = (): Usuario[] => {
  const file = fs.readFileSync("bd.json", "utf8");
  return JSON.parse(file);
};

const escrita = (dados: Usuario[]): void => {
  const json = JSON.stringify(dados);
  fs.writeFileSync(`bd.json`, json);
};

const listarUsuarioPorCpf = (cpf: string): Usuario[] | string => {
  const file = JSON.parse(fs.readFileSync("bd.json", "utf8"));
  const usuarioUnico = file.find((usuario: Usuario) => {
    return usuario.cpf === cpf;
  });

  return usuarioUnico ?? " usuario não encontrado";
};

const usuario: Usuario = {
  nome: "elias",
  email: "elias1@gmail.com",
  cpf: "12345678911",
  profissao: "dev full stack",
};

const atualizarUsuarioPorCpf = (cpf: string, data: Usuario) => {
  const usuario = listarUsuarioPorCpf(cpf);
  if (usuario) {
    const arquivo = leitura();

    const indexUsuario = arquivo.findIndex((usuario) => {
      return usuario.cpf === cpf;
    });

    arquivo.splice(indexUsuario, 1, data);
    escrita(arquivo);

    return arquivo;
  }
};

console.log(atualizarUsuarioPorCpf("12345678911", usuario));
