import { type PlaylistsData } from "../../types/playlistsTypes/types";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

interface CardListProps {
  tracksFromPlaylist: PlaylistsData;
}

const CardList = ({ tracksFromPlaylist }: CardListProps): JSX.Element => {
  return (
    <CardListStyled>
      {tracksFromPlaylist.map((playlist) => (
        <li key={playlist.id}>
          <Card key={playlist.id} playlist={playlist} />
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
