import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import usePlaylist from "../../hooks/usePlaylist/usePlaylist";
import { useAppSelector } from "../../store/hooks";
import DetailPageStyled from "./DetailPageStyled";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

const DetailPage = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getPlaylistById } = usePlaylist();

  const selectedPlaylist = useAppSelector(
    (state) => state.playlist.selectedPlaylist
  );

  useEffect(() => {
    getPlaylistById(id!)
      .then(() => {})
      .catch((error) => {
        console.error("Error al obtener la lista de reproducción:", error);
      });
  }, [getPlaylistById, id]);

  const handleEditClick = () => {
    navigate(`/edit/${selectedPlaylist.id}`, { state: { selectedPlaylist } });
  };

  return (
    <DetailPageStyled>
      <img src={selectedPlaylist.playlistPhoto} alt="Artist in playlist" />
      <div className="text-wrapper">
        <h1>{selectedPlaylist.playlistName}</h1>
        <span className="sub-tracks">Tracks</span>
        <span className="span-border"></span>
        <ul>
          {selectedPlaylist.songs.map((song, index) => (
            <li
              className="track-detail"
              aria-label="track info"
              key={selectedPlaylist.id}
            >
              #{index + 1}
              <article className="track-artist">
                <p> {song.artistName} </p>
                <p className="track-name"> {song.trackName} </p>
              </article>
              {song.bpmTrack} bpm
            </li>
          ))}
        </ul>
        {selectedPlaylist.isCreatedByUser &&
          selectedPlaylist.id !== undefined && (
            <>
              <DeleteButton
                id={selectedPlaylist.id.toString()}
                text="Delete Playlist"
              />
              <button className="edit-button" onClick={handleEditClick}>
                Edit Playlist
              </button>
            </>
          )}
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
