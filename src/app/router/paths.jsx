import Main from "../../pages/Main";
import About from "../../pages/About";
import Catalog from "../../pages/Catalog";
import CatalogDetail from "../../pages/CatalogDetail/CatalogDetail";
import Contacts from "../../pages/Contacts";
import NotFound from "../../pages/NotFound/NotFound";

const paths = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
    title: "О нас"
  },
  {
    path: "/catalog",
    element: <Catalog />,
    title: "Каталог"
  },
  {
    path: "/catalog/:url",
    element: <CatalogDetail />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
    title: "Контакты"
  },
  {
    path: "*",
    element: <NotFound />,
    title: "404"
  }
];

export default paths;