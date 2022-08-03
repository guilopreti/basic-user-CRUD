import express from "express";
import cors from "cors";
import usersRouter from "./routers/users.routes";
import loginRouter from "./routers/login.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/login", loginRouter);

const port = 3333;

app.listen(process.env.PORT || port, () => {
  console.log(`App running on port ${port}`);
});
