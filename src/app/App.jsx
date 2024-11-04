import Header from "../widgets/Header/Header";
import classNames from "classnames";
import "./styles/index.scss";
import AppRoutes from "./router/AppRoutes";
import AppProvider from "./providers/AppProvider";

const App = () => {
  const className = classNames("app");
  
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
