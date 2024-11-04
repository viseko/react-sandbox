import {Provider as ReduxProvider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./ThemeProvider";
import store from "../redux/store";

const AppProvider = ({children}) => {
  const providers = [
    { provider: ReduxProvider, props: { store } },
    { provider: ThemeProvider},
    { provider: BrowserRouter}
  ];

  return providers.reduce((AccumulatedProviders, CurrentProvider) => {
    const { provider: ProviderComponent, props } = CurrentProvider;
    return (
      <ProviderComponent {...props}>
        {AccumulatedProviders}
      </ProviderComponent>
    );
  }, children);
}

export default AppProvider