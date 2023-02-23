import axios from "axios";

const POST_BASE_URL = `http://localhost:8080/v1/posts`;

export const getAllPost = () => {
  return axios({
    method: "get",
    url: POST_BASE_URL,
  });
};

export const createPost = (formData) => {
  return axios.post(POST_BASE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
