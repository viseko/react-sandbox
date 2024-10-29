import { BrowserRouter } from "react-router-dom";
import Header from "../widgets/Header/Header";
import AppRoutes from "./router";
import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
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
