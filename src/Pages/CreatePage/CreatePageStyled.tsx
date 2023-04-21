import styled from "styled-components";

const CreatePagetyled = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 80%),
    rgba(0, 0, 0, 10.65%)
  );
  height: 100%;

  align-items: center;
  padding-top: 40px;

  h1 {
    text-align: center;
    font-family: ${(props) => props.theme.fonts.secondary};
  }
  .gradient-style {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 300px;
    left: 0px;
    top: 0px;
    background: linear-gradient(
      180deg,
      rgba(14, 14, 14, 0) 0%,
      rgba(16, 43, 45, 0.84) 36.26%,
      rgba(55, 43, 235, 0.84) 99.76%
    );
    mix-blend-mode: lighten;
    opacity: 0.2;
    transform: rotate(-180deg);
  }

  p {
    color: #ee9191;
    margin-bottom: 50px;
  }
`;

export default CreatePagetyled;
