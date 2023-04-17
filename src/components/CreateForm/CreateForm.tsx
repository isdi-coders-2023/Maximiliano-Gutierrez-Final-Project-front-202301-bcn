import { useEffect, useState, useCallback } from "react";
import usePlaylist from "../../hooks/usePlaylist/usePlaylist";
import { useAppSelector } from "../../store/hooks";
import {
  PlaylistUpdateStructure,
  Song,
} from "../../types/playlistsTypes/types";
import ButtonForm from "../ButtonForm/ButtonForm";
import CreateFormStyled from "./CreateFormStyled";
import decodeToken from "jwt-decode";
import { CustomTokenPayload } from "../../hooks/useUser/types";

interface CreateFormProps {
  editMode?: boolean;
  initialValues?: PlaylistUpdateStructure;
}

interface FormState {
  playlistName: string;
  playlistPhoto?: string;
  songs: Song[];
}

export const initialFormtState: FormState = {
  playlistName: "",
  songs: [
    { trackName: "", artistName: "", bpmTrack: 0 },
    { trackName: "", artistName: "", bpmTrack: 0 },
    { trackName: "", artistName: "", bpmTrack: 0 },
    { trackName: "", artistName: "", bpmTrack: 0 },
    { trackName: "", artistName: "", bpmTrack: 0 },
  ],
};

const CreateForm: React.FC<CreateFormProps> = ({
  editMode,
  initialValues,
}): JSX.Element => {
  const [formState, setFormState] = useState<FormState>(
    editMode && initialValues
      ? {
          playlistName: initialValues.playlistName || "",
          songs: initialValues.songs || [],
        }
      : initialFormtState
  );
  const [playlistPhoto, setPlaylistPhoto] = useState<File>();

  const { createPlaylist, getPlaylist, editPlaylistById } = usePlaylist();

  const formDataToPlaylistUpdateStructure = (
    formData: FormData
  ): PlaylistUpdateStructure => {
    const playlistUpdateStructure: PlaylistUpdateStructure = {
      id: formData.get("id") as string,
      playlistName: formData.get("playlistName") as string | undefined,
      playlistPhoto: formData.get("playlistPhoto") as string | undefined,
      songs: JSON.parse(formData.get("songs") as string),
    };

    return playlistUpdateStructure;
  };

  const fetchPlayilists = useCallback(async () => {
    await getPlaylist();
  }, [getPlaylist]);

  useEffect(() => {
    fetchPlayilists();
  }, [fetchPlayilists]);

  const tracks = useAppSelector((state) => state.playlist.playlists);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPlaylistPhoto(event.target.files[0]);
    }
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const selectedSong = tracks
      .flatMap((playlist) => playlist.songs)
      .find(
        (song) =>
          `${song.trackName}-${song.artistName}-${song.bpmTrack}` ===
          event.target.value
      );

    if (selectedSong) {
      const newSelectedSongs = [...formState.songs];
      newSelectedSongs[index] = selectedSong;

      setFormState({ ...formState, songs: newSelectedSongs });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();

    data.append("id", initialValues ? initialValues.id : "");
    data.append("playlistName", formState.playlistName);
    if (playlistPhoto) {
      data.append("playlistPhoto", playlistPhoto);
    }

    data.append(
      "userId",
      decodeToken<CustomTokenPayload>(localStorage.getItem("token")!)?.id
    );

    const songsJson = JSON.stringify(formState.songs);
    data.append("songs", songsJson);

    if (editMode) {
      const playlistUpdateStructure = formDataToPlaylistUpdateStructure(data);
      await editPlaylistById(initialValues!.id, playlistUpdateStructure);
    } else {
      await createPlaylist(data);
    }
  };

  const fieldsEmpty = formState.playlistName === "";

  return (
    <CreateFormStyled
      onSubmit={handleSubmit}
      className="create-form"
      encType="multipart/form"
    >
      <label htmlFor="playlistName" className="create-form__label">
        Playlist Name:
      </label>
      <input
        type="text"
        id="playlistName"
        name="playlistName"
        value={formState.playlistName}
        onChange={handleChange}
        className="create-form__input"
      />
      <label htmlFor="playlistPhoto" className="create-form__label">
        Playlist Photo:
      </label>
      <input
        type="file"
        accept="image/*"
        id="playlistPhoto"
        name="playlistPhoto"
        onChange={handleChangeImage}
        className="create-form__input"
      />

      <section className="create-form__section-select">
        {formState.songs.map((_, index) => (
          <div key={index} className="create-form__song">
            <label
              htmlFor={`song-${index}`}
              className="create-form__song-label"
            ></label>
            <select
              id={`song-${index}`}
              name={`song-${index}`}
              value={`${formState.songs[index].trackName}-${formState.songs[index].artistName}-${formState.songs[index].bpmTrack}`}
              onChange={(event) => handleSelectChange(event, index)}
              className="create-form__song-select"
            >
              <option value="">Select a song</option>
              {tracks.map((playlist) =>
                playlist.songs.map((song) => (
                  <option
                    className="create-form__section-option"
                    key={song.trackName}
                    value={`${song.trackName}-${song.artistName}-${song.bpmTrack}`}
                  >
                    {song.trackName} - {song.artistName} - {song.bpmTrack}
                  </option>
                ))
              )}
            </select>
          </div>
        ))}

        <ButtonForm
          text={editMode ? "Edit" : "Create"}
          isDisabled={fieldsEmpty}
          className="create-form__submit-btn"
          ariaLabel="Create playlist"
        />
      </section>
    </CreateFormStyled>
  );
};

export default CreateForm;
