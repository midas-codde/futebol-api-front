import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { authAtom } from "../states";
import { useRecoilState } from "recoil";

type props = { to: React.ReactNode; redirectsTo: React.ReactNode };

const ProtectedRoute = ({ to, redirectsTo }: props) => {
  const navigate = useNavigate();
  const [auth, _] = useRecoilState(authAtom);
  const allowed = auth !== null;

  useLayoutEffect(() => {
    if (!allowed) {
      console.log("Not allowed");
      navigate("/login");
    }
  }, []);

  return <>{allowed ? to : redirectsTo}</>;
};

export default ProtectedRoute;