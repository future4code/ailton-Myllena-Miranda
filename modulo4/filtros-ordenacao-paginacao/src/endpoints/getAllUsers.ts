import { Request, Response } from "express";
import {selectAllUsers,  selectAllUsersName, selectAllUsersNameParam, selectAllUsersNameTwo, selectUserPagination } from "../data/query";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectAllUsers();

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};


export const getAllUsersName = async (
    req: Request,
    res: Response
  ): Promise<void> => {
 
    try {

        let name = req.query.name as string
        if (!name) {
            res.statusCode = 404;
            throw new Error("No names found");
        }
        
        const users = await selectAllUsersName(name);
      res.status(200).send(users);
    } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  };

export const getAllUsersNameParams = async (
    req: Request,
    res: Response
  ): Promise<void> => {
 
    try {

        let name = req.params.name as string
        if (!name) {
            res.statusCode = 404;
            throw new Error("No names found");
        }
        
        const users = await selectAllUsersNameParam(name);
      res.status(200).send(users);
    } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  };


  export const getAllUsersTwo = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
        let tipo = req.query.tipo as string
        let ordenacao = req.query.ordenacao as string

        if (!tipo) {
            tipo ="email"
        }
       
        if (!ordenacao) {
            ordenacao ="asc"
        }
          
        const users = await selectAllUsersNameTwo(tipo, ordenacao);

      res.status(200).send(users);
    } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  };


  export const getAllUsersPagination = async (
    req: Request,
    res: Response
  ): Promise<void> => {
 
    try {

        let page = req.query.page as string
        
        const produtosPorPagina = 5

        if (typeof Number(page)  !== "number") {
            res.statusCode = 404;
            throw new Error("Please insert a number");
        }
        const offset = produtosPorPagina * (Number(page) - 1)
        console.log(offset)
        if (!offset && offset!== 0) {
            res.statusCode = 404;
            throw new Error("Please insert a number");
        }
        
        const users = await selectUserPagination( offset, produtosPorPagina);
      res.status(200).send(users);
    } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  };

