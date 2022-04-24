import jwt from "jsonwebtoken";

const verifyTokenMiddleware = (request, response, next) => {
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

    // const { sub } = decoded;

    // request.user = {
    //   id: sub,
    // };

    next();
  });
};

export default verifyTokenMiddleware;
