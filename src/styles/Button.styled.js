import styled from "styled-components";

export const ButtonContainer = styled.main`
  margin: auto;
  width: 100vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items:center; 
  justify-content: center;
  
 `;

export const ProgressButton = styled.button`
  margin: auto;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 2rem;
  background-color: var(--marron-claro);
  font-weight: bold;
  font-size: .7rem;
  color: white;
`;

export const ButtonStatus = styled.button`
  padding: 5px;
  color: var(--cinza);
  background-color: var(--verde-escuro);
  border: var(--verde-escuro);
  margin: auto;
  display: flex;
`
export const ButtonForm = styled.button`
  width: 100%;
  margin: auto;
  font-size: .8rem;
  background-color: var(--verde-escuro);
  color: var(--bege);
  font-weight: bold;
  margin-top: .5rem;
  padding: .8rem;

  :hover {
    background-color: #3a6332;
  }
`;

export const ButtonRed = styled.button `
background-color: var(--vermelho);
width: 6rem;
height: 2rem;
color: var(--cinza);
`;

export const ButtonGreen = styled.button `
background-color: var(--verde-escuro);
width: 6rem;
height: 2rem;
color: var(--cinza);
`;

export const ButtonUpdate = styled.button `
background-color: var(--verde-escuro);
width: 5rem;
height: 2rem;
color: var(--cinza);
margin: .2rem;
`

export const ButtonVoltar = styled.button `
width: 5rem;
height: 2rem;
background-color: var(--verde-escuro);
color: white;
`;

export const ButtonMenu = styled.button `
width: 8rem;
height: 4rem;
background-color: var(--verde-escuro);
color: white;

`;

export const Buttonsair = styled.button `
background-color: var(--verde-escuro);
width: 5rem;
height: 2rem;
color: white;
`;

export const ModalDelete = styled.section`
width: 20rem;
height: auto;
display: flex;
padding: 1rem;
position: fixed;
flex-direction: column;
top: 50vh;
align-items: center;
margin: auto;
background-color: var(--cinza);
border: 0.3rem solid var(--marron-claro);
border-radius: 15px;
`;

export const ButtonsModal = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: .5rem;
margin-top: 2rem;
`;

export const ButtonsKitchen = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
margin-top: 2rem;
`;

export const ButtonDelete = styled.button `
background-color: var(--vermelho);
color: var(--cinza);
padding: .6rem;
`

