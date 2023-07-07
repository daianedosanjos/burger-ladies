import { AdmLink } from "../../styles/Links.styled";
import Header from "../../Components/header/Header";
import { FiUsers } from "react-icons/fi";
import { BiUserPlus, BiListOl } from "react-icons/bi";
import { MdPlaylistAdd } from "react-icons/md";
import { ContainerAdm, Section } from "./Adm.styled";
import Footer from "../../Components/footer/Footer";



const Adm = () => {
  return (
    <>
      <Header />   
      <ContainerAdm>
        <Section>       
        <AdmLink to="/register"> <BiUserPlus size={60} color="#eee2e2"/>Adicionar colaborador</AdmLink>
        <AdmLink to="/listusers"> <FiUsers size={60} color="#eee2e2"/>Lista de colaboradores</AdmLink>
        <AdmLink to="/adcproducts"><MdPlaylistAdd size={60} color="#eee2e2"/>Adicionar item ao cardápio</AdmLink>
        <AdmLink to="/listproducts"><BiListOl size={60} color="#eee2e2"/> Lista de ítens do cardápio</AdmLink>
        </Section> 
        <Footer />
      </ContainerAdm>
    </>
  );
};

export default Adm;
