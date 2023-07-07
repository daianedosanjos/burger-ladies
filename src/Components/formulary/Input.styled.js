import styled from "styled-components";

export const CustomInput = styled.input`
  width: 70vw;
  padding: 0.6rem;
  background-color: var(--bege);
  font-size: 1.3rem;

  @media (min-width: 1200px) {
    width: 25vw;
    padding: 0.2rem;
    font-size: 1rem;
  }

  input::placeholder {
    font-size: 1.6rem;
    color: var(--bege);

    @media (min-width: 1200px) {
      font-size: 0.8rem;
    }
  }
`;
