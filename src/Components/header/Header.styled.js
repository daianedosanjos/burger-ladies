import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  gap: 4rem;
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: var(--marron-claro);

  @media (min-width: 250px) and (max-width: 700px) {
    justify-content: center;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }

  img {
    width: 250px;
  }
`;

export const IconesMenu = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (min-width: 250px) and (max-width: 700px) {
   margin-bottom: 1rem;
  }

`;
