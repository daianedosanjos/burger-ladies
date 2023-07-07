import styled from "styled-components";

export const FooterContainer = styled.footer`
  gap: 1rem;
  background-color: var(--marron-claro);
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
`;

export const FooterStyled = styled.footer`
  width: 100%;
  color: var(--cinza);
  justify-content: center;
  display: flex;
  font-size: .8rem;
`;
export const FooterSocial = styled.div`
  gap: 2rem;
  font-size: 1.5rem;
  justify-content: center;
  display: flex;

  .linkedin {
    background: #0072b1;
    border-radius: 50%;

    svg {
      color: #fff;
    }
  }

  .github {
    background: #111;
    border-radius: 50%;
  }

  svg {
    color: #fff;
  }

  .instagram {
    background: #bc2a8d;
    border-radius: 50%;

    svg {
      color: #fff;
    }
  }
`;
