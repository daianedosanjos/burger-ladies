import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  CartBox,
  Total,
  DivButton,
  FinalizeOrder,
  ContainerFooterOrder,
  Main,
} from "./Cart.styled";
import { FormClient } from "./Cart.styled";
import { postOrder } from "../../services/api";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [clientName, setClientName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [status, setStatus] = useState("aberto");
  const navigate = useNavigate();

  const handleClientName = (e) => setClientName(e.target.value);
  const handleTableNumber = (e) => setTableNumber(e.target.value);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const handlePrice = () => {
    let quantityProducts = 0;
    cart.map((item) => {
      quantityProducts += item.amount * item.price;
    });
    setPrice(quantityProducts);
  };

  useEffect(() => {
    handlePrice();
  });

  const sendKitchen = (e) => {
    if(clientName === "" || tableNumber === ""){
      return toast.error("Por favor, preencha o nome do cliente e número da mesa");
    }
    const orderCheck = {
      name: clientName,
      table: tableNumber,
      total: price,
      status,
      realizado: new Date().toLocaleString(),
      data: new Date(),
      pedidos: cart,
    };

    postOrder(orderCheck);
    toast.success("Pedido enviado com sucesso");

    navigate("/attendance");
  };

  return (
    <Main>
      <FormClient>
        <label>
          <span>Nome do cliente:</span>
          <input
            type="text"
            value={clientName}
            name="text"
            placeholder="Digite o nome do cliente"
            onChange={handleClientName}
          />
        </label>
        <label>
          <span>Nº da mesa:</span>
          <select
            value={tableNumber}
            placeholder="Número da mesa"
            onChange={handleTableNumber}
          >
            <option hidden>Número da mesa</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </FormClient>
      {cart.map((item) => (
        <CartBox key={item.id}>       
            <h5>{item.name}</h5>
            <p>R$:{item.price},00</p>        
         
            <DivButton>
              <button onClick={() => handleChange(item, -1)}> - </button>
              <span>{item.amount}</span>
              <button onClick={() => handleChange(item, +1)}> + </button>
            </DivButton>
            <span> R$:{item.amount * item.price},00</span>
            <button onClick={() => handleRemove(item.id)}>Excluir</button>
        
        </CartBox>
      ))}
      <ContainerFooterOrder>
        <FinalizeOrder onClick={() => sendKitchen()}>
          Finalizar Pedido
        </FinalizeOrder>
        <Total>
          <span>Total:</span>
          <span> R${price},00</span>
        </Total>
      </ContainerFooterOrder>
    </Main>
  );
};

export default Cart;
