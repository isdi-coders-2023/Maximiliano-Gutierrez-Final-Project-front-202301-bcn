import { useState, useCallback, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import usePlaylist from "../../hooks/usePlaylist/usePlaylist";
import { Song } from "../../types/playlistsTypes/types";
import FilterByBpm from "./FilterByBpm";
import PlaylistFilterComponentStyled from "./PlaylistFilterComponentStyled";

interface PlaylistFilterComponentProps {
  handleFilteredSongs?: (songs: Song[]) => void;
}

const PlaylistFilterComponent: React.FC<PlaylistFilterComponentProps> = () => {
  const { getPlaylist } = usePlaylist();
  const [selectedSongs, setSelectedSongs] = useState<Song[]>([]);

  const fetchPlayilists = useCallback(async () => {
    await getPlaylist();
  }, [getPlaylist]);

  useEffect(() => {
    fetchPlayilists().catch((error) => {
      return error;
    });
  }, [fetchPlayilists]);

  const playlists = useAppSelector((state) => state.playlist.playlists);

  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  const handleFilteredSongs = (songs: Song[]) => {
    setFilteredSongs(songs);
  };

  const handleSongClick = (song: Song) => {
    setSelectedSongs((prevSongs) => {
      if (prevSongs.find((s) => s.id === song.id)) {
        return prevSongs.filter((s) => s.id !== song.id);
      } else {
        return [...prevSongs, song];
      }
    });
  };

  return (
    <PlaylistFilterComponentStyled className="song-filter">
      <FilterByBpm
        playlists={playlists}
        onFilteredSongs={handleFilteredSongs}
        className="song-filter__filter-by-bpm"
      />

      <section className="song-filter__result-section">
        <h3 className="song-filter__title">Filtered Songs:</h3>
        <ul className="song-filter__list">
          {filteredSongs.map((song, index) => (
            <li
              key={song.id}
              data-testid="song-filter-list"
              className={`song-filter__list-item ${
                selectedSongs.includes(song)
                  ? "song-filter__list-item--selected"
                  : ""
              }`}
              onClick={() => handleSongClick(song)}
            >
              {index + 1}: {song.trackName} - {song.artistName} -{" "}
              {song.bpmTrack} bpm
            </li>
          ))}
        </ul>
      </section>
    </PlaylistFilterComponentStyled>
  );
};

export default PlaylistFilterComponent;
