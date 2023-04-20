import styled from "styled-components";

const FilterByBpmStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 50px;

  h3 {
    text-align: center;
    padding-bottom: 20px;
    padding-top: 20px;
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.fonts.secondary};
  }

  .filter-options {
    color: #06a0b5;
  }

  .filter-options__checkbox {
    margin: 3px 3px 3px 0px;
  }
`;

export default FilterByBpmStyled;
