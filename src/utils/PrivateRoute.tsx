import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ component }) => {
  //FILL HERE 3.6
  const navigate = useNavigate();

  const hasAccess = useSelector(
    (state: RootState) => state.floorReducer.hasAccess
  );

  useEffect(() => {
    if (!hasAccess) {
      navigate("/forbidden");
    }
  }, [hasAccess, navigate]);

  return hasAccess ? <>{component}</> : null;
};

export default PrivateRoute;
