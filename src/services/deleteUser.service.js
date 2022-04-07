import users from "../database";

const deleteUserService = (id) => {
  const userIndex = users.findIndex(({ uuid }) => uuid === id);

  if (userIndex === -1) {
    return "Usuário não encontrado";
  }

  users.splice(userIndex, 1);

  return { mensagem: "Usuário deletado com sucesso!" };
};

export default deleteUserService;
