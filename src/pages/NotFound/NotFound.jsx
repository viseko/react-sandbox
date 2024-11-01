import Page from "../../shared/templates/Page";
import styles from "./NotFound.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const NotFound = () => {
  const className = classNames(styles.notFound)

  return (
    <Page title="Страница не найдена" className={className}>
      <Link
        to="/"
      >
        Вернуться на главную
      </Link>
    </Page>
  );
};

export default NotFound;