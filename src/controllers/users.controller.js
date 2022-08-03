import jwt from "jsonwebtoken";
import createUserService from "../services/users/createUser.service.js";
import listUsersService from "../services/users/listUsers.service.js";
import listProfileService from "../services/users/listProfile.service.js";
import updateUserService from "../services/users/updateUser.service.js";
import deleteUserService from "../services/users/deleteUser.service.js";

class UsersController {
  /* criar */
  async store(request, response) {
    const { name, email, password, isAdm } = request.body;

    const createUser = await createUserService(name, email, password, isAdm);

    return response.status(201).json(createUser);
  }

  /** listar */
  index(request, response) {
    const allUsers = listUsersService();

    return response.status(200).json(allUsers);
  }

  /* buscar 1 recurso */
  show(request, response) {
    let token = request.headers.authorization;

    token = token.split(" ")[1];

    const { id } = jwt.decode(token);

    const userProfile = listProfileService(id);

    return response.status(200).json(userProfile);
  }

  /* atualizar */
  async update(request, response) {
    const { uuid } = request.params;
    const { email, name, password } = request.body;

    try {
      const updatedUser = await updateUserService(name, email, password, uuid);

      return response.status(200).json(updatedUser);
    } catch (err) {
      return response
        .status(400)
        .json({ status: "error", message: err.message });
    }
  }

  /* deletar */
  delete(request, response) {
    const { uuid } = request.params;

    try {
      const deletedUser = deleteUserService(uuid);

      return response.status(200).json(deletedUser);
    } catch (err) {
      return response
        .status(400)
        .json({ status: "error", message: err.message });
    }
  }
}

export default UsersController;
