import Main from "../../pages/Main";
import About from "../../pages/About";
import Catalog from "../../pages/Catalog";
import Contacts from "../../pages/Contacts";

const paths = [
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/catalog",
    element: <Catalog />
  },
  {
    path: "/contacts",
    element: <Contacts />
  },
];

export default paths;