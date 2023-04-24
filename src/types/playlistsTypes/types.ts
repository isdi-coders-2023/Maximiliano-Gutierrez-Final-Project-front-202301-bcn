export interface Song {
  trackName: string;
  artistName: string;
  bpmTrack: number;
  id?: string;
}

export interface Playlist {
  isCreatedByUser?: boolean;
  playlistName: string;
  playlistPhoto?: string;
  playlistBpm?: number;
  postedBy?: string;

  id?: string | number;
  songs: Song[];
}

export interface PlaylistsDataStructure {
  playlists: Playlist[];
}

export type PlaylistsData = Playlist[];

export type PlaylistsState = {
  playlists: PlaylistsData;
  selectedPlaylist: Playlist;
  isLoading?: boolean;
  selectedSongs?: Song[];
};

export interface PlaylistCreateStructure {
  playlistName: string;
  playlistPhoto: string;
  songs: Song[];
}

export interface PlaylistCreateDataStructure extends PlaylistCreateStructure {
  id: string;
  postedBy?: string;
  isCReatedByUser: boolean;
}

export interface PlaylistCreateData {
  playlists: PlaylistCreateDataStructure;
  playlist: PlaylistCreateDataStructure;
}

export type PlaylistsCreateDataStructure = PlaylistCreateDataStructure[];

export interface ApiResponseStructure {
  playlist: PlaylistCreateDataStructure;
}

export interface PlaylistUpdateStructure {
  id: string;
  playlistName?: string;
  playlistPhoto?: string;
  songs?: Song[];
}

export interface PlaylistLocationState {
  selectedPlaylist: Playlist;
}
