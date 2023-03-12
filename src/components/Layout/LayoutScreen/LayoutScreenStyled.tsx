import styled from "styled-components";

const LayoutScreenStyled = styled.div`
  display: flex;

  .degradate__element {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 100%),
      rgba(0, 0, 0, 3.65%)
    );
  }
`;

export default LayoutScreenStyled;
