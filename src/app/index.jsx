import Index from "../pages/Index";
import Header from "../widgets/Header/Header";
import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
      <Header
        classNames={["app__header"]}
      />
      <main className="app__main">
        <Index />
      </main>
    </div>
  );
}

export default App;
