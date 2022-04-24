import jwt from "jsonwebtoken";
import users from "../database";

const verifyTokenAdmMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ erro: "Necessário Token de Autorização" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ erro: "Token Inválido" });
    }

    const actualUser = users.find((user) => user.uuid === decoded.sub);

    if (!actualUser) {
      return response.status(401).json({ erro: "Token Inválido" });
    }

    if (!actualUser.isAdm) {
      return response
        .status(401)
        .json({ erro: "Apenas administradores podem acessar essa rota." });
    }

    // const { sub } = decoded;

    // request.user = {
    //   id: sub,
    // };

    next();
  });
};

export default verifyTokenAdmMiddleware;
