import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FooterContainer, FooterSocial, FooterStyled } from "./Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <FooterStyled>
        <p>
          Copyright © 2023 - Todos os direitos reservados - Desenvolvido por
          Daiane dos Anjos
        </p>
      </FooterStyled>
      <FooterSocial>
        <a
          href="https://www.linkedin.com/in/daianeanjos/"
          target="_blank"
          className="linkedin"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/daianedosanjos"
          target="_blank"
          className="github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/daianeanjos.sep/"
          target="_blank"
          className="instagram"
        >
          <FaInstagram />
        </a>
      </FooterSocial>
    </FooterContainer>
  );
}
export default Footer;
