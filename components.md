# DATA

## DATA LAYER

# List of public playlists

-id
-name
-songs (list of song IDs)

# List of private user playlists

-id
-name
-songs (list of song IDs)

# List of songs

-id
-name
-artist
-album
-bpm
-isFavorite (boolean)

# isLoading (boolean)

# Error 404

## DATA MODIFICATIONS

-Add song to favorites
-Remove song from favorites
-Create new user playlist
-Modify a user playlist
-Delete a user playlist
-Add song to user playlist
-Remove song from user playlist
-Set isLoading
-Unset isLoading
-Activate error
-Deactivate error

## COMPONENTS

# CONTEXT PROVIDER (STORE)

-Contains the list of public playlists
-Contains the list of user playlists
-Contains the list of songs
-Contains the function to add song to favorites
-Contains the function to remove song from favorites
-Contains the function to create user playlist
-Contains the function to modify user playlist
-Contains the function to delete user playlist
-Contains the function to add song to user playlist
-Contains the function to remove song from user playlist

# UI CONTEXT PROVIDER (STORE)

-Contains isLoading
-Contains Error 404
-Contains set isLoading function
-Contains unset isLoading function
-Contains activate error function
-Contains deactivate error function

## APP

# NAVIGATION

-Shows the navigation pages
-Receives the action from user to go to a page

# HOME PAGE

-Shows the list of public playlists
-Sends a playlist to Playlist Detail

# PLAYLIST DETAIL PAGE

-Receives a playlist
-Shows the playlist detail (name, songs)
-Sends a song to Song Detail

# SONG DETAIL PAGE

-Receives a song
-Shows the song detail (name, artist, album, bpm)
-Sends an action to add/remove from favorites

# USER PLAYLISTS PAGE

-Shows the list of user playlists
-Sends a playlist to User Playlist Detail

# USER PLAYLIST DETAIL PAGE

-Receives a user playlist
-Shows the user playlist detail (name, songs)
-Sends a song to Song Detail
-Sends an action to add/remove song from user playlist
-Sends an action to delete user playlist

# USER PLAYLIST FORM PAGE

-Shows the form to create or modify a user playlist
-Sends a new or modified user playlist to User Playlist Detail

# FILTER

-Receives the action from user to filter by bpm

# BUTTON

-Receives the action from user to request next/previous songs/playlists
-Receives the action from user to go to next/previous page

# LOADING PAGE

-Shows the loader depending on isLoading

# ERROR PAGE

-Shows the error when there is an error
