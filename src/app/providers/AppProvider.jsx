import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./ThemeProvider";

const AppProvider = ({children}) => {
  const providers = [
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