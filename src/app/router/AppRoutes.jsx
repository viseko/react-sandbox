import {Routes, Route} from "react-router-dom";
import paths from "./paths";

const AppRoutes = () => {
  return (
    <Routes>
      {
        paths.map(item => (
          <Route
            path={item.path}
            element={item.page}
          />
        ))
      }
    </Routes>
  )
};

export default AppRoutes;