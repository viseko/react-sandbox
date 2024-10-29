import Main from "../../pages/Main";
import About from "../../pages/About";
import Catalog from "../../pages/Catalog";
import Contacts from "../../pages/Contacts";

const paths = [
  {
    path: "/",
    page: <Main />
  },
  {
    path: "/about",
    page: <About />
  },
  {
    path: "/catalog",
    page: <Catalog />
  },
  {
    path: "/contacts",
    page: <Contacts />
  },
];

export default paths;