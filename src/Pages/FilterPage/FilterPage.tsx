import PlaylistFilterComponent from "../../components/FilterByBpm/PlaylistsFilterComponent";
import FilterPageStyled from "./FilterPageStyled";

const CreatePage = (): JSX.Element => {
  return (
    <FilterPageStyled>
      <h1>
        Filter your <br />
        music!
      </h1>
      <PlaylistFilterComponent />
      <div className="gradient-style"></div>
    </FilterPageStyled>
  );
};

export default CreatePage;
