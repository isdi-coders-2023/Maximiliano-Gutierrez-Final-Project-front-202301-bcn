import styled from "styled-components";

const BottomLayoutStyled = styled.div`
  display: flex;
  padding-bottom: 25px;

  .degradate__element {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 27vh;
    width: 100vw;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 100%),
      rgba(0, 0, 0, 3.65%)
    );

    .fa-solid {
      color: white;
      font-size: 30px;
    }
  }
`;

export default BottomLayoutStyled;
