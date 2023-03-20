import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePlaylists from "../../hooks/usePlaylist/usePlaylist";
import { useAppSelector } from "../../store/hooks";

const DetailPage = (): JSX.Element => {
  const { id } = useParams();

  const { getPlaylistById } = usePlaylists();

  const selectedPlaylist = useAppSelector(
    (state) => state.playlist.selectedPlaylist
  );

  useEffect(() => {
    getPlaylistById(id!);
  }, [getPlaylistById, id]);

  return (
    <>
      <h1>{selectedPlaylist.playlistName}</h1>
      <img src={selectedPlaylist.playlistPhoto} alt="" />
    </>
  );
};

export default DetailPage;
