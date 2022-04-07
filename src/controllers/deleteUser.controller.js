import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) => {
  const { uuid } = request.params;

  const deletedUser = deleteUserService(uuid);

  return response.json(deletedUser);
};

export default deleteUserController;
