import users from "../../database";

const listProfileService = (id) => {
  const userProfile = users.find(({ uuid }) => uuid === id);

  const { name, email, uuid, isAdm, createdOn, updatedOn } = userProfile;

  return { name, email, uuid, isAdm, createdOn, updatedOn };
};

export default listProfileService;
