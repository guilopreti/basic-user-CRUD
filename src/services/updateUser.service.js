import users from "../database";
import * as bcrypt from "bcryptjs";

const updateUserService = async (name = "", email = "", password = "", id) => {
  let updatedInfos = {
    updatedOn: new Date(),
  };

  if (name) {
    updatedInfos = { ...updatedInfos, name };
  }
  if (email) {
    updatedInfos = { ...updatedInfos, email };
  }
  if (password) {
    const newPassword = await bcrypt.hash(password, 10);
    updatedInfos = { ...updatedInfos, password: newPassword };
  }

  const actualUserIndex = users.findIndex(({ uuid }) => uuid === id);

  if (actualUserIndex === -1) {
    return "Usuário não encontrado";
  }

  users[actualUserIndex] = { ...users[actualUserIndex], ...updatedInfos };

  return users[actualUserIndex];
};

export default updateUserService;
