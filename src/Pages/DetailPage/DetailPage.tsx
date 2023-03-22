import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePlaylists from "../../hooks/usePlaylist/usePlaylist";
import { useAppSelector } from "../../store/hooks";
import DetailPageStyled from "./DetailPageStyled";

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
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
