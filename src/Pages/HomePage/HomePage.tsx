import HomePageStyled from "./HomePageStyled";
import usePlaylists from "../../hooks/usePlaylist/usePlaylist";
import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import CardList from "../../components/CardList/CardList";

const HomePage = (): JSX.Element => {
  const { getPlaylist } = usePlaylists();

  useEffect(() => {
    getPlaylist();
  }, [getPlaylist]);

  const tracksFromPlaylist = useAppSelector(
    (state) => state.playlist.playlists
  );

  return (
    <HomePageStyled className="homepage">
      <div className="homepage__title ">
        <h1 className="title-main">
          Techno Playlist <br />
          Creator
        </h1>
        <h2 className="title-subtitle">Explore and create in your subgenre</h2>
      </div>
      <div className="gradient-style"></div>

      <CardList tracksFromPlaylist={tracksFromPlaylist} />
    </HomePageStyled>
  );
};

export default HomePage;
