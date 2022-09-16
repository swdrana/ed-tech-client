import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/shared/Loading";
import auth from "./firebase.init";

const RequireNonAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <Loading />;
  if (!user) return children;
  return navigate("/");
};

export default RequireNonAuth;
