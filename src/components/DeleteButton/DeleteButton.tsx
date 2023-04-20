import DeleteButtonStyled from "./DeleteButtonStyled";
import usePlaylists from "../../hooks/usePlaylist/usePlaylist";
import { useNavigate } from "react-router-dom";

interface DeleteButtonProps {
  text: string;
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ text, id }) => {
  const { deletePlaylist } = usePlaylists();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deletePlaylist(id);
      navigate("/");
    } catch (error) {
      return error;
    }
  };

  return (
    <DeleteButtonStyled onClick={handleDelete} className="delete-button">
      {text}
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
