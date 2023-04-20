import styled from "styled-components";

const PlaylistFilterComponentStyled = styled.div`
  width: 100%;
  display: flex;
  text-align: start;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
  padding-right: 30px;

  .song-filter__result-section {
    color: #fff;
    gap: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    width: inherit;

    & .song-filter__title {
      font-size: 1.5rem;
      font-family: ${(props) => props.theme.fonts.secondary};
    }

    .song-filter__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .song-filter__list-item {
    cursor: pointer;

    &--selected {
      text-decoration: underline;
    }
  }

  h3 {
    font-family: ${(props) => props.theme.fonts.secondary};
    text-align: center;
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 30px;
    font-style: italic;
  }

  .song-filter__new-playlist {
    display: flex;
    font-size: 24px;
    flex-direction: column;
    align-items: center;
    align-self: center;
    gap: 10px;
    padding-bottom: 150px;
  }

  .song-filter__new-playlist-name {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .song-filter__save-playlist {
    height: 40px;
    border-radius: 10px;
    color: #fff;
    border: 1px solid #fff;
  }
`;

export default PlaylistFilterComponentStyled;
