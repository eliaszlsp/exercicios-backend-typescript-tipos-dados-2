export type Usuario = {
  nome: String;
  email: String;
  cpf: String;
  profissao?: String;
  endereco?: Endereco | undefined;
};

export type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
};
