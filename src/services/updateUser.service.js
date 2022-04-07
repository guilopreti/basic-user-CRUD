import users from "../database";
import * as bcrypt from "bcryptjs";

const updateUserService = async (
  newName = "",
  newEmail = "",
  newPassword = "",
  id
) => {
  let updatedInfos = {
    updatedOn: new Date(),
  };

  if (newName) {
    updatedInfos = { ...updatedInfos, name: newName };
  }
  if (newEmail) {
    updatedInfos = { ...updatedInfos, email: newEmail };
  }
  if (newPassword) {
    const newPasswordHashed = await bcrypt.hash(newPassword, 10);
    updatedInfos = { ...updatedInfos, password: newPasswordHashed };
  }

  const actualUserIndex = users.findIndex(({ uuid }) => uuid === id);

  if (actualUserIndex === -1) {
    return "Usuário não encontrado";
  }

  users[actualUserIndex] = { ...users[actualUserIndex], ...updatedInfos };

  const { name, email, uuid, isAdm, createdOn, updatedOn } =
    users[actualUserIndex];

  return { name, email, uuid, isAdm, createdOn, updatedOn };
};

export default updateUserService;
