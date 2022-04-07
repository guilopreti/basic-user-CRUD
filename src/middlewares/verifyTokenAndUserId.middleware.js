import jwt from "jsonwebtoken";
import users from "../database";

const verifyTokenAndUserIdMiddleware = (request, response, next) => {
  let token = request.headers.authorization;
  const { uuid } = request.params;

  if (!token) {
    return response
      .status(401)
      .json({ erro: "Necessário Token de Autorização" });
  }

  token = token.split(" ")[1];

  const tokenInfos = jwt.decode(token);

  const matchUserToken = users.find((user) => user.uuid === tokenInfos.id);

  if (!matchUserToken.isAdm) {
    const matchUserParam = users.find((user) => user.uuid === uuid);
    if (matchUserParam !== matchUserToken) {
      return response
        .status(401)
        .json({ erro: "Necessário Permissão de Administrador" });
    }
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ erro: "Token Inválido" });
    }

    next();
  });
};

export default verifyTokenAndUserIdMiddleware;
