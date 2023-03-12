import BottomLayoutStyled from "./BottomLayoutStyled";
import {
  faArrowUpShortWide,
  faHouse,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../store/hooks";

const BottomLayout = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <BottomLayoutStyled>
      <nav className="degradate__element">
        {isLogged ? (
          <>
            <FontAwesomeIcon icon={faHouse} className="fa-solid" />
            <FontAwesomeIcon icon={faArrowUpShortWide} className="fa-solid" />
            <FontAwesomeIcon icon={faPlus} className="fa-solid" />
            <FontAwesomeIcon icon={faUser} className="fa-solid" />
          </>
        ) : (
          ""
        )}
      </nav>
    </BottomLayoutStyled>
  );
};

export default BottomLayout;
