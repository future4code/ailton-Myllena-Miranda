import { connection } from "./connection";

export async function selectAllUsers(): Promise<any> {
  const result = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio;
      `);

  return result[0];
}

export async function selectAllUsersName(nome: string): Promise<any> {
  const result = await connection.raw(`
           SELECT * FROM aula48_exercicio WHERE name LIKE "%${nome}%";
        `);

  return result[0];
}

export async function selectAllUsersNameParam(nome: string): Promise<any> {
  const result = await connection.raw(`
           SELECT * FROM aula48_exercicio WHERE name LIKE "%${nome}%";
        `);

  return result[0];
}

export async function selectAllUsersNameTwo(tipo: string, ordenacao:string): Promise<any> {
    const result = await connection.raw(`
             SELECT * FROM aula48_exercicio ORDER BY ${tipo} ${ordenacao}
          `);
  
    return result[0];
  }


  export async function selectUserPagination( offset:number, produtosPorPagina:number): Promise<any> {
    const result = await connection.raw(`
             SELECT * FROM aula48_exercicio 
             LIMIT ${produtosPorPagina}
             OFFSET ${offset}
          `);
  
    return result[0];
  }


