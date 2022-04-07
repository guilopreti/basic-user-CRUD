import jwt from "jsonwebtoken";
import listProfileService from "../services/listProfile.service";

const listProfileController = (request, response) => {
  let token = request.headers.authorization;

  token = token.split(" ")[1];

  const { id } = jwt.decode(token);

  const userProfile = listProfileService(id);

  return response.json(userProfile);
};

export default listProfileController;
