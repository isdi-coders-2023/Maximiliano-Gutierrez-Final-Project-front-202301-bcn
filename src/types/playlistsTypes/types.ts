export interface Song {
  trackName: string;
  artistName: string;
  bpmTrack: number;
}

export interface Playlist {
  playlistName: string;
  playlistPhoto: string;
  playlistBpm?: number;
  postedBy?: string;

  id: string;
  songs: Song[];
}

export interface PlaylistsDataStructure {
  playlists: Playlist[];
}

export type PlaylistsData = Playlist[];

export type PlaylistsState = {
  playlists: PlaylistsData;
  selectedPlaylist: Playlist;
};
