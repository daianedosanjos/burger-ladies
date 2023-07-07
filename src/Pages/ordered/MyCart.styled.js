import styled from "styled-components";

export const ContainerCart = styled.div `
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  gap: 5rem;
  margin-bottom: .2rem;


  @media (min-width: 300px) and (max-width: 772px) {
    justify-content: center;
  }

 `
export const SizeCart = styled.span`
  background-color: var(--marron-claro);
  position: absolute;
  color: var(--cinza);
  border-radius: 50%;
  padding: 0.3rem;
`;

export const Return = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SignOutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
