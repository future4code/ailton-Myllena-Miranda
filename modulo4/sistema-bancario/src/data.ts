export type fluxoConta = {
    total: number;
    data: Date;
    tipo: string;
  };
  
  export type cliente = {
    id: number;
    nome: string;
    cpf: number;
    dataNascimento: Date;
    total: number;
    fluxo: fluxoConta[];
  };
  