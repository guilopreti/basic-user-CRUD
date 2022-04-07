import users from "../database";

const listUsersService = () => {
  let retornedUsers = users.map(
    ({ name, email, uuid, isAdm, createdOn, updatedOn }) => {
      return { name, email, uuid, isAdm, createdOn, updatedOn };
    }
  );

  return retornedUsers;
};

export default listUsersService;
