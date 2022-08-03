import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";
import users from "../../database";

const createUserService = async (name, email, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const createdOn = new Date();
  const updatedOn = new Date();
  const uuid = uuidv4();

  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn,
    updatedOn,
    uuid,
  };

  users.push(newUser);

  return { name, email, isAdm, createdOn, updatedOn, uuid };
};

export default createUserService;
