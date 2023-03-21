import styled from "styled-components";

const DetailPageStyled = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding-bottom: 300px;

  h1 {
    text-align: center;
    padding-top: 40px;
    font-size: 26px;
    font-weight: 300;
  }

  span {
    display: block;
    text-align: center;
    padding-top: 15px;
  }

  .sub-tracks {
    color: #00c2cb;
    text-shadow: 0 0 4px #39c0d4;
  }

  .span-border {
    border-bottom: 2px solid #00c2cb;
    width: 120px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-top: 30px;
  }

  img {
    position: fixed;
    height: 100vh;
    object-fit: cover;
    width: 100%;
    z-index: -99;
  }
  .text-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .track-name {
    opacity: 0.4;
  }

  li {
    color: #fff;
  }

  span {
    color: #fff;
  }

  .track-detail {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: initial;
    padding: 10px 20px;
    background-color: rgba(30, 30, 30, 0.81);
    border-radius: 10px;
    align-items: center;
  }

  .track-artist {
    width: 200px;
    padding-left: 30px;
  }
`;

export default DetailPageStyled;
