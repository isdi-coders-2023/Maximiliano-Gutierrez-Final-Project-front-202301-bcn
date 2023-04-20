import CreateForm from "../../components/CreateForm/CreateForm";
import EditPageStyled from "./EditPageStyled";
import { useLocation } from "react-router-dom";

const EditPage = (): JSX.Element => {
  const location = useLocation();
  const selectedPlaylist = location.state.selectedPlaylist;

  return (
    <EditPageStyled>
      <h1>
        Edit your <br />
        playlist!
      </h1>
      <div className="gradient-style"></div>
      <CreateForm editMode={true} initialValues={selectedPlaylist} />
    </EditPageStyled>
  );
};

export default EditPage;
