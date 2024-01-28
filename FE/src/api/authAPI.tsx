import axios from "axios";

const URL = "http://localhost:4000";

export const createUser = async (data: {}) => {
  try {
    return axios.post(`${URL}/create-user`, data).then((res) => {
      console.log(res);

      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const loginUser = async (data: {}) => {
  try {
    return axios.post(`${URL}/login-user`, data).then((res) => {
      console.log(res);

      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUser = async (data: {}, ID: string) => {
  try {
    return axios.post(`${URL}/get-one-user/${ID}`, data).then((res) => {
      console.log(res);

      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllUsers = async (data: {}, ID: string) => {
  try {
    return axios.post(`${URL}/get-all-user`, data).then((res) => {
      console.log(res);

      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
