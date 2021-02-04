export const authHeader = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
};

export const saveAuthHeader = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};
