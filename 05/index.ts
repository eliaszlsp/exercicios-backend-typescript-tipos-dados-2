import { Usuario } from "./types";
import fs from "node:fs";

const listarUsuarioPorProfissao = (profissao?: string): Usuario[] | String => {
  const file: Usuario[] = JSON.parse(fs.readFileSync("bd.json", "utf8"));
  const usuarioUnico = file.filter((usuario: Usuario) => {
    if (profissao) return usuario.profissao === profissao;

    return file;
  });

  return usuarioUnico.length > 0 ? usuarioUnico : "usuario não encontrado";
};

console.log(listarUsuarioPorProfissao());
