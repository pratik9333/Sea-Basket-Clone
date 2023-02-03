import API from "../backend";

export const getCategories = () => {
  return fetch(`${API}`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
