import {useRoutes} from "react-router-dom";
import paths from "./paths";

const AppRoutes = () => {
  const routes = useRoutes(paths);

  return routes;
};

export default AppRoutes;