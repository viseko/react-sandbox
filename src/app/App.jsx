import { BrowserRouter } from "react-router-dom";
import Header from "../widgets/Header/Header";
import classNames from "classnames";
import "./styles/index.scss";
import AppRoutes from "./router/AppRoutes";

const App = () => {
  const className = classNames("app");
  
  return (
    <BrowserRouter>
      <div className={className}>
        <Header
          classNames={["app__header"]}
        />
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
