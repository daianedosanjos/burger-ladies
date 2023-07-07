import styled from "styled-components";
import burguer from "../../assets/hamburguer.jpeg";

export const MainForm = styled.main`
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-image: url(${burguer});
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
`;
export const Form = styled.form`
  background-color: var(--marron-claro);
  width: 80vw;
  height: auto;
  margin: auto;
  margin-top: 2rem;
  gap: 1.5rem;
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    width: 30vw;
  }

  h4 {
    margin-bottom: 0.3rem;
    color: var(--bege);
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
  }

  select {
    width: 70vw;
    padding: 0.6rem;
    background-color: var(--bege);
    font-size: 1.3rem;
    display: grid;

    @media (min-width: 1200px) {
      width: 25vw;
      padding: 0.2rem;
      font-size: 1rem;
    }
  }

  label {
    font-size: 1.2rem;
    color: var(--bege);

    @media (min-width: 1200px) {
      font-size: 1rem;
    }

    span {
      margin-left: 0.4rem;
    }
  }
`;

export const Select = styled.select`
  width: 70vw;
  padding: 1rem;
  background-color: var(--bege);
  font-size: 1.3rem;
  display: grid;

  @media (min-width: 1200px) {
    width: 25vw;
    padding: 0.2rem;
    font-size: 1rem;
  }
`;
