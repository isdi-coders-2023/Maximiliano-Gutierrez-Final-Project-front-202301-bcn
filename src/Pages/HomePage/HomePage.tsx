import HomePageStyled from "./HomePageStyled";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <div className="degradate__element">
        <BottomNavigation />
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
