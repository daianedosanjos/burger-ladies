import styled from "styled-components";

export const Main = styled.article`
  width: 90vw;
  margin: auto;
  margin-top: 3rem;
  background-color: var(--marron-claro);
  color: var(--cinza);
  padding: 2rem;
  border-radius: 10px;
  
`;

export const CartBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 2px solid;
  gap: 0.2rem;

  h5 {
    width: 35vw;
    height: 3rem;
    padding: 1rem;
  }
  p {
    width: 10vw;
    height: 3rem;
    padding: 1rem;
  }

  button {
    padding: 0.3rem;
    border-radius: 15px;
    font-weight: bold;
    background-color: var(--vermelho);
    color: var(--cinza);
  }

  span {
    color: var(--cinza);
    
  }
`;

export const DivButton = styled.div`
  background-color: var(--cinza);
  text-align: center;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;

  button {
    border-radius: 50%;
    padding: 0.8rem;
  }

  span {
    color: #000;
  }
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.5rem;
  margin-right: 6rem;
  gap: 1rem;

  && :nth-child(1) {
    display: flex;
    font-size: 0.8rem;
    align-items: center;
  }
`;

export const FinalizeOrder = styled.button`
  background-color: var(--vermelho);
  width: 10rem;
  height: auto;
  color: var(--cinza);
  margin-top: 1rem;
  text-align: center;
  padding: 0.5rem;
`;

export const ContainerFooterOrder = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const FormClient = styled.form`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  width: 80vw;
  margin: 2rem auto;
  gap: 1rem;

  input {
    width: 17rem;
    padding: 0.5rem;
    background-color: var(--bege);
    margin-right: 1rem;
  }

  select {
    width: auto;
    padding: 0.5rem;
    background-color: var(--bege);
    margin-right: 1rem;
  }

  span {
    font-weight: bold;
  }
`;
