import listUsersService from "../services/listUsers.service";

const listUsersController = (requesr, response) => {
  const allUsers = listUsersService();

  return response.json(allUsers);
};

export default listUsersController;
