import updateUserService from "../services/updateUser.service";

const updateUserController = async (request, response) => {
  const { uuid } = request.params;
  const { email, name, password } = request.body;

  const updatedUser = await updateUserService(name, email, password, uuid);

  return response.json(updatedUser);
};

export default updateUserController;
