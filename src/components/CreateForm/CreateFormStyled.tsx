import styled from "styled-components";

const CreateFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  padding-bottom: 250px;
  margin: 0 37px;

  .create-form {
    display: flex;
    align-items: center;

    &__label {
      font-size: 1.2rem;
    }

    &__input {
      width: 100%;
      height: 2.5rem;
      border-radius: 5px;
      font-size: 1.2rem;
    }

    &__section-select {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 25px;
      gap: 20px;
    }

    &__submit-btn {
      margin-top: 20px;
    }

    &__song {
      height: 2.5rem;
    }

    &__song-select {
      height: 2.5rem;
      border-radius: 5px;
      font-size: 1rem;
    }
  }
`;

export default CreateFormStyled;
