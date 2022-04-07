import users from "../database";

const listProfileService = (id) => {
  const userProfile = users.find(({ uuid }) => uuid === id);

  return userProfile;
};

export default listProfileService;
