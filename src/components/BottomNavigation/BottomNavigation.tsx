import BottomNavigationStyled from "./BottomNavigationStyled";
import { NavLink } from "react-router-dom";
import {
  faArrowUpShortWide,
  faHouse,
  faPlus,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../store/hooks";
import useUser from "../../hooks/useUser/useUser";

const BottomNavigation = (): JSX.Element => {
  const { logoutUser } = useUser();
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <BottomNavigationStyled>
      <nav className="degradate__element">
        {isLogged ? (
          <>
            <NavLink to="/">
              <FontAwesomeIcon
                icon={faHouse}
                className="fa-solid"
                aria-label="home"
              />
            </NavLink>
            <NavLink to="/filter">
              <FontAwesomeIcon
                icon={faArrowUpShortWide}
                className="fa-solid"
                aria-label="filter"
              />
            </NavLink>
            <NavLink to="/create">
              <FontAwesomeIcon
                icon={faPlus}
                className="fa-solid"
                aria-label="plus icon"
              />
            </NavLink>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="fa-solid"
              onClick={logoutUser}
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
