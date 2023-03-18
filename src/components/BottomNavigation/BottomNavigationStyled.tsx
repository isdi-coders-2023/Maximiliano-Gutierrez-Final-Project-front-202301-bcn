import styled from "styled-components";

const BottomNavigationStyled = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;

  .degradate__element {
    display: flex;
    align-items: flex-end;
    padding-bottom: 25px;
    justify-content: space-around;
    height: 30vh;
    width: 100vw;
    background: linear-gradient(
      to top,
      hsl(0, 0%, 0%) 0%,
      hsla(0, 0%, 0%, 0.738) 19%,
      hsla(0, 0%, 0%, 0.541) 34%,
      hsla(0, 0%, 0%, 0.382) 47%,
      hsla(0, 0%, 0%, 0.278) 56.5%,
      hsla(0, 0%, 0%, 0.194) 65%,
      hsla(0, 0%, 0%, 0.126) 73%,
      hsla(0, 0%, 0%, 0.075) 80.2%,
      hsla(0, 0%, 0%, 0.042) 86.1%,
      hsla(0, 0%, 0%, 0.021) 91%,
      hsla(0, 0%, 0%, 0.008) 95.2%,
      hsla(0, 0%, 0%, 0.002) 98.2%,
      hsla(0, 0%, 0%, 0) 100%
    );

    .fa-solid {
      color: white;
      font-size: 30px;
    }
  }
`;

export default BottomNavigationStyled;
