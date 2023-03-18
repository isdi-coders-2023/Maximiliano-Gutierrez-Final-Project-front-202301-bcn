import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  /* padding-top: 35px; */
  padding-bottom: 200px;
  width: 100vw;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 100%),
    rgba(0, 0, 0, 50.65%)
  );
  .gradient-style {
    position: absolute;
    width: 100%;
    height: 400px;
    left: 0px;
    top: 0px;
    background: linear-gradient(
      180deg,
      rgba(14, 14, 14, 0) 0%,
      rgba(16, 43, 45, 0.84) 36.26%,
      rgba(18, 6, 181, 0.84) 99.76%
    );
    mix-blend-mode: lighten;
    opacity: 0.2;
    transform: rotate(-180deg);
  }

  .homepage__title {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: 20px;
    padding: 2.5rem 2rem 2.6rem;
  }

  .title-main {
    color: #00c2cb;
  }

  .title-subtitle {
    font-weight: 300;
    font-size: 1.5rem;
    font-style: italic;
  }
`;

export default HomePageStyled;
