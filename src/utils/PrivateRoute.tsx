import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ component }) => {
  //FILL HERE 3.6
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();

  const hasAccess = useSelector((state: RootState) => {
  const floorId = Number(id);
  return state.floor.floors.find((floor) => floor.id === floorId)?.hasAccess ?? false;
  });

  useEffect(() => {
    if (!hasAccess) {
      navigate("/forbidden");
    }
  }, [hasAccess, navigate]);

  return hasAccess ? <>{component}</> : null;
};

export default PrivateRoute;
