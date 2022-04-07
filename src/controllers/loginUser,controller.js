import loginUserService from "../services/loginUser.service";

const loginUserController = (request, response) => {
  const { email, password } = request.body;

  const loginUser = loginUserService(email, password);

  if (!loginUser) {
    return response.status(401).json({ erro: "Email ou senha inválidos" });
  }

  return response.json(loginUser);
};

export default loginUserController;
