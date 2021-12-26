const url = `https://api.github.com/users/${user}`;
const fetchUser = () => {
  return fetch(url, { method: "GET" })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

export default fetchUser;

//https://api.github.com/users/
