import useSwr from "swr";
import { getStudy, getStudyHistory, getTopScholars } from "../api/studyAPI";

export const getOneStudy = (ID: string) => {
  const { data } = useSwr("get-one-study", () => {
    return getStudy(ID).then((res) => res);
  });
  return { data };
};

export const getOneStudyHistory = (ID: string) => {
  const { data } = useSwr("get-one-history", () => {
    return getStudyHistory(ID).then((res) => res);
  });

  return { data };
};

export const topFive = () => {
  const { data } = useSwr("get-top-five", () => {
    return getTopScholars().then((res) => res);
  });

  return { data };
};
