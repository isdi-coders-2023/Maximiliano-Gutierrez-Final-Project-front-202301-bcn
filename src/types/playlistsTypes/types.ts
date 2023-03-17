export interface Song {
  trackName: string;
  artistName: string;
  bpmTrack: number;
}

export interface Playlist {
  playlistName: string;
  playlistPhoto: string;
  playlistBpm?: number;
  id: string;
  songs: Song[];
}

export interface PlaylistsDataStructure {
  playlists: Playlist[];
}

export type PlaylistsData = Playlist[];
