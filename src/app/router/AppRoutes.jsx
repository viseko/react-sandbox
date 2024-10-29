import {Routes, Route} from "react-router-dom";
import paths from "./paths";

const AppRoutes = () => {
  return (
    <Routes>
      {
        paths.map(({path, page}) => (
          <Route
            key={path}
            path={path}
            element={page}
          />
        ))
      }
    </Routes>
  )
};

export default AppRoutes;