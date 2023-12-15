import { Usuario } from "./types";
import fs from "node:fs";

const listarUsuarioPorProfissao = (profissao: string): Usuario[] | String => {
  const file: Usuario[] = JSON.parse(fs.readFileSync("bd.json", "utf8"));
  const usuarioUnico = file.filter((usuario: Usuario) => {
    return usuario.profissao === profissao;
  });

  return usuarioUnico.length > 0 ? usuarioUnico : "usuario não encontrado";
};

console.log(listarUsuarioPorProfissao("dev_full_stack"));
