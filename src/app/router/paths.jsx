import Main from "../../pages/Main";
import About from "../../pages/About";
import Catalog from "../../pages/Catalog";
import CatalogDetail from "../../pages/CatalogDetail/CatalogDetail";
import Contacts from "../../pages/Contacts";

const paths = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/catalog/:id",
    element: <CatalogDetail />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
];

export default paths;