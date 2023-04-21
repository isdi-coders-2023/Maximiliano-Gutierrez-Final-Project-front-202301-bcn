import CreateForm from "../../components/CreateForm/CreateForm";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = (): JSX.Element => {
  return (
    <CreatePageStyled>
      <h1>
        Create your <br />
        playlist!
      </h1>
      <p>(All fields are requerid)</p>
      <div className="gradient-style"></div>
      <CreateForm data-testid="create-form" />
    </CreatePageStyled>
  );
};

export default CreatePage;
