import { tokenAtom, userAtom } from "@/coil";
import { Navigate, useNavigate } from "react-router-dom";
import { getRecoil } from "recoil-nexus";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";

export const AuthBrancher = () => {
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/bidding");
    else navigate("/login");
  }, [user]);

  return <></>;
};
