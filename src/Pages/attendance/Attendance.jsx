import Header from "../../Components/header/Header";
import { ButtonContainer } from "../../styles/Button.styled";
import { AttendanceLink } from "../../styles/Links.styled";
import KitchenProgress from "../kitchen/kitchenProgress";
import {LuClipboardSignature} from "react-icons/lu";


const Attendance = () => {
  return (
    <>
      <Header />
      <ButtonContainer>
        <AttendanceLink to="/ordered"><LuClipboardSignature size={60} color="#eee2e2"/>Novo pedido</AttendanceLink>
        <KitchenProgress />       
       </ButtonContainer>
    </>
  );
};
 
export default Attendance;
