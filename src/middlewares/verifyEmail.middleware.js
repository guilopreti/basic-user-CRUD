import users from "../database";

const verifyEmailMiddleware = (request, response, next) => {
  const { email } = request.body;

  const existentUser = users.find((user) => user.email === email);

  if (existentUser) {
    return response
      .status(400)
      .json({ erro: "Este email já está sendo utilizado." });
  }

  next();
};

export default verifyEmailMiddleware;
