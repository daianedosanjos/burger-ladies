import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }

  body {
    background-color: var(--bege);
    font-family: Arial, Helvetica, sans-serif
  }

  a {
    text-decoration: none;
  }
  
  li{
    list-style:none;
    color: inherit
  }

  button{
    cursor: pointer;
    border-radius: 10px;
    text-transform: uppercase;
    border: none;   
  }

  input, select{
    border-radius: 10px;
    border: none;
  }

  :root{
    --marron-escuro: #502314;
    --marron-claro: #963c08;
    --bege: #f0b04e;
    --nude: : #f49d4d;
    --vermelho: #8c0000;
    --verde: #b3b359;
    --verde-escuro: #03300b;
    --cinza: #d0d7b5;
  }
 `;



export const ContainerCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  margin: auto;
  padding-left: 0;

`;

export const Cards = styled.ul`
  width: 15rem;
  height: auto;
  border-radius: 15px;
  font-size: 0.9rem;
  background-color: var(--nude);
  border: 0.3rem solid var(--marron-escuro);
  color:var(--marron-escuro);
  box-shadow: 20px 20px 60px var(--marron-escuro);              
  margin: 1rem;
  padding: 0.8rem;
  align-items: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

 `;

export const H3 = styled.h3`
  text-transform: uppercase;
  text-align: center;
  margin: 1rem 1rem;
  justify-content: center;
  display: flex;
  color: var(--marron-escuro);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

export const Text = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  justify-content: center;
  font-size: 1.3rem;
  display: flex;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
`
