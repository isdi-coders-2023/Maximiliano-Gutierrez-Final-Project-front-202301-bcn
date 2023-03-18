import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 200px;
  background-color: #146f69;
  border-radius: 0px 20px 0px 20px;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

  .playlist-information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    padding-top: 20px;
    padding-left: 10px;
  }

  h2 {
    text-align: center;
    padding-left: 5px;
    font-family: ${(props) => props.theme.fonts.secondary};
  }

  img {
    border-radius: 0 0px 0 20px;
    object-fit: cover;
  }

  .section {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    padding-right: 10px;
  }

  button {
    font-size: 22px;
    display: none;
  }
`;

export default CardStyled;
