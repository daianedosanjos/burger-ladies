import { FaCartArrowDown } from "react-icons/fa";
import { CardPrice, CardsItens, Headercard, DivButton } from "./Cards.styled";

const Cards = ({ item, handleClick }) => {
  const { name, price, description } = item;
  return (
    <CardsItens>      
     <Headercard>
      <h5>{name}</h5>     
      <CardPrice>
      <p>R$ {price},00</p>
      </CardPrice>
      </Headercard>
       <p>{description}</p>       
        <DivButton>
        <button onClick={() => handleClick(item)}>
          <FaCartArrowDown size={30} weight="bold" color="#03300b" />
         </button>
        </DivButton>      
    </CardsItens>
  );
};

export default Cards;
