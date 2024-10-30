import { BrowserRouter, Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";
import AppRoutes from "./router";
import classNames from "classnames";
import "./styles/index.scss";

const App = () => {
  const className = classNames("app");
  
  return (
    <BrowserRouter>
      <div className={className}>
        <Header
          classNames={["app__header"]}
        />
        <Outlet />
        <main className="app__main">
          <div className="container">
            <AppRoutes />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
