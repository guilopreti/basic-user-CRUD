import users from "../../database/index.js";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginUserService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Email ou senha inválidos");
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new Error("Email ou senha inválidos");
  }

  const token = jwt.sign({ email: email, id: user.uuid }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: user.uuid,
  });

  return { token };
};

export default loginUserService;
