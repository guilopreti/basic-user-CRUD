import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginUserService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return false;
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return false;
  }

  const token = jwt.sign({ email: email, id: user.uuid }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  return { token };
};

export default loginUserService;
