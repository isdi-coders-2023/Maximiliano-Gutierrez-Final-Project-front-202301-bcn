import { useState, useCallback, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import usePlaylist from "../../hooks/usePlaylist/usePlaylist";
import { Playlist, Song } from "../../types/playlistsTypes/types";
import FilterByBpm from "./FilterByBpm";
import PlaylistFilterComponentStyled from "./PlaylistFilterComponentStyled";
import { v4 as uuidv4 } from "uuid";

interface PlaylistFilterComponentProps {
  handleFilteredSongs?: (songs: Song[]) => void;
}

const PlaylistFilterComponent: React.FC<PlaylistFilterComponentProps> = () => {
  const { getPlaylist, addPlaylist } = usePlaylist();
  const [selectedSongs, setSelectedSongs] = useState<Song[]>([]);
  const [newPlaylistName, setNewPlaylistName] = useState<string>("");

  const fetchPlayilists = useCallback(async () => {
    await getPlaylist();
  }, [getPlaylist]);

  useEffect(() => {
    fetchPlayilists();
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

  const saveNewPlaylist = () => {
    const newPlaylist: Playlist = {
      id: uuidv4(),
      playlistName: newPlaylistName,
      playlistPhoto: "",
      playlistBpm: 0,
      postedBy: "",
      songs: selectedSongs,
    };

    addPlaylist(newPlaylist);
  };

  return (
    <PlaylistFilterComponentStyled className="song-filter">
      <FilterByBpm
        playlists={playlists}
        onFilteredSongs={handleFilteredSongs || handleFilteredSongs}
        className="song-filter__filter-by-bpm"
      />
      <section className="song-filter__result-section">
        <h3 className="song-filter__title">Filtered Songs:</h3>
        <ul className="song-filter__list">
          {filteredSongs.map((song, index) => (
            <li
              key={index}
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
      <section className="song-filter__new-playlist">
        <h3>Create new playlist:</h3>
        <p>(Select from Filtered Songs)</p>
        <input
          type="text"
          placeholder="Playlist name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
          className="song-filter__new-playlist-name"
        />
        <button
          onClick={saveNewPlaylist}
          className="song-filter__save-playlist"
        >
          Save Playlist
        </button>
      </section>
    </PlaylistFilterComponentStyled>
  );
};

export default PlaylistFilterComponent;
