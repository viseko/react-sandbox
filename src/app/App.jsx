import { BrowserRouter } from "react-router-dom";
import Header from "../widgets/Header/Header";
import classNames from "classnames";
import "./styles/index.scss";
import AppRoutes from "./router/AppRoutes";
import ThemeProvider from "./providers/ThemeProvider";
import {Provider} from "react-redux";
import store from "./redux/store";

const App = () => {
  const className = classNames("app");
  
  return (
    <Provider store={store}>
      <ThemeProvider>
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
      </ThemeProvider>
    </Provider>
  );
}

export default App;
