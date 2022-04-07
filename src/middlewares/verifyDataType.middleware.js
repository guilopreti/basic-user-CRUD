const verifyDataTypeMiddleware = (request, response, next) => {
  const { name, email, password, isAdm } = request.body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof isAdm !== "boolean"
  ) {
    return response.status(400).json({ erro: "Dados Inválidos." });
  }

  next();
};

export default verifyDataTypeMiddleware;
