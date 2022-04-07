import express from "express";
import usersRouter from "./routers/users.routes";
import loginRouter from "./routers/login.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", loginRouter);

app.listen(3333);
