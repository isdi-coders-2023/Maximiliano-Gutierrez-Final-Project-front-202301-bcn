import { useEffect, useState, useCallback } from "react";
import usePlaylist from "../../hooks/usePlaylist/usePlaylist";
import { useAppSelector } from "../../store/hooks";
import {
  type PlaylistUpdateStructure,
  Song,
  Playlist,
} from "../../types/playlistsTypes/types";
import ButtonForm from "../ButtonForm/ButtonForm";
import CreateFormStyled from "./CreateFormStyled";
import decodeToken from "jwt-decode";
import { CustomTokenPayload } from "../../hooks/useUser/types";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

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
          playlistName: initialValues.playlistName ?? "",
          songs: initialValues.songs ?? [],
        }
      : initialFormtState
  );
  const [playlistPhoto, setPlaylistPhoto] = useState<File>();

  const { createPlaylist, getPlaylist, editPlaylistById } = usePlaylist();

  const navigate = useNavigate();

  const formDataToPlaylistUpdateStructure = (
    formData: FormData
  ): PlaylistUpdateStructure => {
    const playlistPhotoBlob = formData.get("playlistPhoto");

    const playlistUpdateStructure: PlaylistUpdateStructure = {
      id: formData.get("id") as string,
      playlistName: formData.get("playlistName") as string | undefined,
      playlistPhoto:
        playlistPhotoBlob instanceof Blob
          ? URL.createObjectURL(playlistPhotoBlob)
          : undefined,
      songs: JSON.parse(formData.get("songs") as string),
    };

    return playlistUpdateStructure;
  };

  const fetchPlayilists = useCallback(async () => {
    await getPlaylist();
  }, [getPlaylist]);

  useEffect(() => {
    fetchPlayilists()
      .then(() => {})
      .catch((error) => {
        return error;
      });
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

    const submitForm = async () => {
      const data = new FormData();

      data.append("id", initialValues?.id ?? "");
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
        if (initialValues !== undefined) {
          const playlistUpdateStructure =
            formDataToPlaylistUpdateStructure(data);
          await editPlaylistById(initialValues.id, playlistUpdateStructure);
          navigate(`/`);
        }
      } else {
        await createPlaylist(data);
      }
    };

    submitForm().catch((error) => {
      return error;
    });
  };

  const getUniqueSongs = (playlists: Playlist[]): Song[] => {
    const allSongs = playlists.flatMap((playlist) => playlist.songs);
    const uniqueSongs = allSongs.filter(
      (song, index, self) =>
        index ===
        self.findIndex(
          (track) =>
            track.trackName === song.trackName &&
            track.artistName === song.artistName &&
            track.bpmTrack === song.bpmTrack
        )
    );
    return uniqueSongs;
  };

  const uniqueSongs = getUniqueSongs(tracks);

  const allSongsSelected = (): boolean => {
    return formState.songs.every(
      (song) =>
        song.trackName !== "" && song.artistName !== "" && song.bpmTrack !== 0
    );
  };

  const fieldsEmpty = formState.playlistName === "";

  return (
    <CreateFormStyled
      onSubmit={handleSubmit}
      className="create-form"
      encType="multipart/form-data"
      data-testid="create-form"
    >
      <div data-testid="initial-values" style={{ display: "none" }}>
        {JSON.stringify(initialValues)}
      </div>
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
      {!editMode && (
        <>
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
            required
          />
        </>
      )}
      <section className="create-form__section-select">
        {formState.songs.map((_, index) => (
          <div key={uuidv4()} className="create-form__song">
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
              {uniqueSongs.map((song) => (
                <option
                  className="create-form__section-option"
                  key={song.trackName}
                  value={`${song.trackName}-${song.artistName}-${song.bpmTrack}`}
                >
                  {song.trackName} - {song.artistName} - {song.bpmTrack}
                </option>
              ))}
            </select>
          </div>
        ))}

        <ButtonForm
          text={editMode ? "Edit" : "Create"}
          isDisabled={
            fieldsEmpty || !allSongsSelected() || (!editMode && !playlistPhoto)
          }
          className="create-form__submit-btn"
          ariaLabel="Create playlist"
        />
      </section>
    </CreateFormStyled>
  );
};

export default CreateForm;
