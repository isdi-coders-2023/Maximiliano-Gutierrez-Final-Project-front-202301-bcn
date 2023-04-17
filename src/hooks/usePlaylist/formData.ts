import { Playlist } from "../../types/playlistsTypes/types";

const formData = (playlist: Playlist) => {
  const data = new FormData();

  data.append("playlistName", playlist.playlistName);
  data.append("playlistPhoto", playlist.playlistPhoto?.toString() || "");
  data.append("songs", playlist.songs[0].trackName);
  data.append("songs", playlist.songs[0].artistName);
  data.append("songs", playlist.songs[0].bpmTrack.toString());

  return data;
};

export default formData;
