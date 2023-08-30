import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Check } from "phosphor-react";
import { differenceInMinutes } from "date-fns";
import {
  ButtonContainer,
  ButtonStatus,
  ProgressButton,
  ButtonDelete,
  ButtonsKitchen,
  ModalDelete,
  ButtonsModal,
  ButtonRed,
  ButtonGreen
} from "../../styles/Button.styled";
import { deleteApi, getApi, patchOrders } from "../../services/api";
import { Cards, ContainerCards, Text } from "../../styles/Global.styles";
import { Itens } from "./KitchenProgress.styled";

const KitchenProgress = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  const getOrders = async () => {
    getApi(`orders/`)
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  const filterStatus = (status) => {
    setSelectedStatus(status);
    setShowStatus(true);
  };

  const statusFiltered = selectedStatus
    ? orders.filter((order) => order.status === selectedStatus)
    : orders;

  const changeStatus = async (item) => {
    if (item.status === "execução") {
      item.datapronto = new Date();
    }
    switch (item.status) {
      case "aberto":
        item.status = "execução";
        break;
      case "execução":
        item.status = "pronto";
        break;
      case "pronto":
        item.status = "entregue";
        break;
    }
    patchOrders({
      id: item["id"],
      status: item["status"],
      datapronto: item["datapronto"],
    })
      .then((data) => {
        return setStatus(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(item.status);
  };

  async function deleteOrders(order) {
    deleteApi(`orders/${idDelete.id}`)
      .then((response) => {
        if (response.ok) {
          toast.success("Pedido excluído com sucesso!");
        }
      })
      .then((data) => {
        setOrders((prevState) =>
          prevState.filter((item) => item.id !== idDelete.id)
        );
        closeModalDelete();
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(orders);
  }

  const openModalDelete = (order) => {
    setIdDelete(order);
    setShowModalDelete(true);
  };

  const closeModalDelete = () => {
    setIdDelete(null);
    setShowModalDelete(false);
  };


  return (
    <>
      <ButtonContainer>
        <ProgressButton onClick={() => filterStatus("aberto")}>
          Pedidos abertos
        </ProgressButton>
        <ProgressButton onClick={() => filterStatus("execução")}>
          Pedidos em execução
        </ProgressButton>
        <ProgressButton onClick={() => filterStatus("pronto")}>
          Pedidos prontos
        </ProgressButton>
        <ProgressButton onClick={() => filterStatus("entregue")}>
          Pedidos entregues
        </ProgressButton>
      </ButtonContainer>
      
      <ContainerCards>
        
      {showModalDelete && idDelete && (
        <ModalDelete>
          <Text>Tem certeza que deseja excluir este Pedido?</Text>
          <ButtonsModal>
            <ButtonRed onClick={deleteOrders}>Sim</ButtonRed>
            <ButtonGreen onClick={closeModalDelete}>Cancelar</ButtonGreen>
          </ButtonsModal>
        </ModalDelete>
      )}
        {showStatus &&
          statusFiltered.map((item) => (
            <Cards key={item.id}>                  
              <li key={item.id}> <strong>Data: </strong> {item.realizado} </li> 
              <li key={item.id}> <strong>Cliente: </strong> {item.name} </li> 
              <li key={item.id}> <strong>Mesa: </strong> {item.table} </li>
              <li key={item.id}> <strong>Status: </strong> {item.status} </li>
              <li key={item.id}> <strong>Preço: </strong> {item.total},00 </li>
                <br />
              <li key={item.id}><strong> Detalhes do pedido:</strong>
              {item.pedidos.map((order) => (
              <>
                <li key={order.id}> </li>    
                <Itens>                      
                  <li key={order.id}><Check size={15} color="#03300b" weight="bold" />{order.name}</li>
                  <li key={order.id}> Qtd:{order.amount}</li>
                </Itens> 
              </>      
                  ))}  
              </li>                           
              <br />
              {item.status === "pronto" ? (
                <p key={item.id}>
                  <strong>
                    Este pedido ficou pronto em
                    {differenceInMinutes(
                      new Date(item.datapronto),
                      new Date(item.data)
                    )}
                    minutos.
                  </strong>
                </p>
              ) : null}
              {item.status === "entregue" ? (
                <p key={item.id}>
                  <strong>
                    Este pedido ficou pronto em{" "}
                    {differenceInMinutes(
                      new Date(item.datapronto),
                      new Date(item.data)
                    )}
                    minutos às {new Date(item.datapronto).toLocaleTimeString()}.
                  </strong>
                </p>
              ) : null}
              <ButtonsKitchen>
                <ButtonStatus onClick={() => changeStatus(item)}>
                  Alterar status do pedido
                </ButtonStatus>

                <ButtonDelete onClick={() => openModalDelete(item)}>
                  Excluir pedido
                </ButtonDelete>
              </ButtonsKitchen>
            </Cards>
          ))}
      </ContainerCards>
    </>
  );
};

export default KitchenProgress;
