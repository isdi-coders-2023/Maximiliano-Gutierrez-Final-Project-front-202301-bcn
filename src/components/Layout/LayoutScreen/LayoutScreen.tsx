import LayoutScreenStyled from "./LayoutScreenStyled";
import BottomLayout from "../BottomLayout/BottomLayout";

const LayoutScreen = (): JSX.Element => {
  return (
    <LayoutScreenStyled>
      <div className="degradate__element">
        <BottomLayout />
      </div>
    </LayoutScreenStyled>
  );
};

export default LayoutScreen;
