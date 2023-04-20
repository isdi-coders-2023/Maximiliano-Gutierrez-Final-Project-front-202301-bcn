import { Link } from "react-router-dom";
import endpoints from "../../routers/types";
import NotFoundPageStyled from "./NotFoundPageStyled";
import { ReactComponent as Error404 } from "../../assets/icons/error404.svg";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled className="not-found">
      <h3 className="not-found__title">This is</h3>
      <Error404 />
      <h2 className="not-found__subtitle">Page not found!</h2>
      <span className="not-found__go">
        go to {""}
        <Link className={"not-found__link"} to={endpoints.home}>
          home page
        </Link>
      </span>
      <div className="not-found__gradient-style"></div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
