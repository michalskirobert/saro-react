export const authHeader = () => {
  if (localStorage.getItem("user").isLogged === false) {
    localStorage.setItem(
      "user",
      JSON.stringify({ isLogged: false, profile: {} })
    );
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
