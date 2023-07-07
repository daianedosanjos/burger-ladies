import styled from "styled-components";
import burguer from "../../assets/hamburguer.jpeg";

export const ContainerAdm = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  margin: auto;
  background-image: url(${burguer});
  background-size: cover;
  position: relative;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 80vw;
  height: 50vh;
  margin-top: 1rem;
`;
