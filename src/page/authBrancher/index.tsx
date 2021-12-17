import { tokenAtom, userAtom } from "@/coil";
import { Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

export const AuthBrancher = () => {
  const user = useRecoilValue(userAtom);
  if (user) return <Navigate replace to="/bidding" />;
  return <Navigate replace to="/login" />;
};
