import styled from "styled-components";

export const CardsItens = styled.div`
  width: 20rem;
  height: 13rem;
  border-radius: 15px;
  font-size: 0.9rem;
  background-color: var(--bege);
  border: 0.3rem solid var(--marron-escuro);
  color: var(--marron-escuro);
  box-shadow: 20px 20px 60px var(--marron-escuro);
  align-items: center;
  display: grid;
  padding: 1rem;
`;

export const Headercard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;

  h5{
   width: 12vw;
  }
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: var(--verde-escuro);
  width: 4rem;
  height: 3rem;
  border-radius: 50%;
  color: var(--bege);

  p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const DivButton = styled.div`
  button {
    background-color: transparent;
  }
`;

