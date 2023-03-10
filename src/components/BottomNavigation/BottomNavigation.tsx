import BottomNavigationStyled from "./BottomNavigationStyled";
import {
  faArrowUpShortWide,
  faHouse,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../store/hooks";

const BottomNavigation = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <BottomNavigationStyled>
      <nav className="degradate__element">
        {isLogged ? (
          <>
            <FontAwesomeIcon
              icon={faHouse}
              className="fa-solid"
              aria-label="home"
            />
            <FontAwesomeIcon
              icon={faArrowUpShortWide}
              className="fa-solid"
              aria-label="filter"
            />
            <FontAwesomeIcon
              icon={faPlus}
              className="fa-solid"
              aria-label="plus icon"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="fa-solid"
              aria-label="logout"
            />
          </>
        ) : (
          ""
        )}
      </nav>
    </BottomNavigationStyled>
  );
};

export default BottomNavigation;
