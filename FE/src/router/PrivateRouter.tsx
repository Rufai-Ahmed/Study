import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const ID = JSON.parse(localStorage.getItem("ID")!);

  return ID ? (
    <div>{children}</div>
  ) : (
    <>
      <Navigate to="/auth/login" />{" "}
    </>
  );
};
