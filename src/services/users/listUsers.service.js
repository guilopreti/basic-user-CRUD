import users from "../../database/index.js";

const listUsersService = () => {
  let retornedUsers = users.map(
    ({ name, email, uuid, isAdm, createdOn, updatedOn }) => {
      return { name, email, uuid, isAdm, createdOn, updatedOn };
    }
  );

  return retornedUsers;
};

export default listUsersService;
