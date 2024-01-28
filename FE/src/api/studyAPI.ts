import axios from "axios";

const URL = "https://study-be-main.onrender.com";

export const createStudy = async (data: {}, ID: string) => {
  try {
    return axios.post(`${URL}/create-study/${ID}`, data).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    return error;
  }
};
export const getStudy = async (ID: string) => {
  try {
    return axios.get(`${URL}/get-study/${ID}`).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    return error;
  }
};

export const getStudyHistory = async (ID: string) => {
  try {
    return axios.get(`${URL}/get-history/${ID}`).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    return error;
  }
};
export const getTopScholars = async () => {
  try {
    return axios.get(`${URL}/get-top-five`).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    return error;
  }
};

export const setElapsed = async (ID: string) => {
  try {
    return axios.patch(`${URL}/update-elapsed/${ID}`).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    return error;
  }
};

export const addLesson = async (data: {}, studyID: string) => {
  try {
    return axios
      .post(`${URL}/add-student-learnt/${studyID}`, data)
      .then((res) => {
        return res.data?.data;
      });
  } catch (error) {
    return error;
  }
};
