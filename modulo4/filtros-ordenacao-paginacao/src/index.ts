import { app } from "./app";
import { getAllUsers, getAllUsersName, getAllUsersNameParams,getAllUsersTwo, getAllUsersPagination } from "./endpoints/getAllUsers";

app.get("/user/all", getAllUsers);

app.get("/user", getAllUsersName);

app.get("/username/:name", getAllUsersNameParams);

app.get("/usuario", getAllUsersTwo);

app.get("/usuario/page", getAllUsersPagination);

