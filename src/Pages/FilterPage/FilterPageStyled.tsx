import styled from "styled-components";

const FilterByBpmStyled = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.106)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
  width: 100%;
  padding-bottom: 200px;

  h1 {
    text-align: center;
    color: #fff;
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
      rgba(18, 6, 181, 0.84) 99.76%
    );
    mix-blend-mode: lighten;
    opacity: 0.2;
    transform: rotate(-180deg);
  }
`;

export default FilterByBpmStyled;
