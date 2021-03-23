export const authHeader = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    localStorage.setItem("user", JSON.stringify({}));
  } else {
    JSON.parse(localStorage.getItem("user"));
  }
};

export const saveAuthHeader = (user) => {
  if (user.isLogged != false) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.setItem("user", JSON.stringify([]));
  }
};
