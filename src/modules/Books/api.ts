import axios from "axios";

export const BooksAPI = () => {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },

    url: process.env.REACT_APP_BASIC_URI
  });
};