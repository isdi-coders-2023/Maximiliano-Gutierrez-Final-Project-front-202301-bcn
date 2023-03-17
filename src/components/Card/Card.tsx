import { Playlist } from "../../types/playlistsTypes/types";
import CardStyled from "./CardStyled";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  playlist: Playlist;
}

const Card = ({
  playlist: { playlistName, playlistPhoto },
}: CardProps): JSX.Element => {
  return (
    <CardStyled>
      <div className="user-editor__section section">
        <button className="button-edit">
          <FontAwesomeIcon icon={faPenToSquare} className="fa-light edit" />
        </button>
        <button className="button-delete">
          <FontAwesomeIcon icon={faTrashCan} className="fa-light" />
        </button>
      </div>
      <div className="playlist-information">
        <h2>{playlistName}</h2>
        <img
          src={playlistPhoto}
          alt="Layton Giordani"
          width={170}
          height={113}
        />
      </div>
    </CardStyled>
  );
};

export default Card;
