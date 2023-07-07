import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getApi, deleteApi } from "../../services/api";
import Header from "../../Components/header/Header";
import EditUser from "./EditUser";
import {
  ButtonRed,
  ButtonGreen,
  ButtonsModal,
  ModalDelete,
} from "../../styles/Button.styled";
import {
  Cards,
  ContainerCards,
  H3,
  Text,
} from "../../styles/Global.styles";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [idDelete, setIdDelete] = useState(null);

  const getUsers = async () => {
    getApi(`users/`)
    .then((data) => {
      setUsers(data);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const openModalDelete = (user) => {
    setIdDelete(user);
    setShowModalDelete(true);
  };

  const closeModalDelete = () => {
    setIdDelete(null);
    setShowModalDelete(false);
  };

  const openModalEdit = (user) => {
    setEditingUser(user);
    setShowModalEdit(true);
  };

  const closeModalEdit = () => {
    setEditingUser(null);
    setShowModalEdit(false);
  };

  async function deleteUsers(user) {
    deleteApi(`users/${idDelete.id}`)
    .then((response) => {
      if (response.ok) {
        toast.success("colaborador excluído com sucesso");
      }
    })
    .then((data) => {
      // const teste = users.filter( item => item.id !== user.id)
      setUsers((prevState) =>
        prevState.filter((item) => item.id !== idDelete.id)
      );
      closeModalDelete();
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Header />
      <H3>Lista de colaboradores</H3>
      {showModalEdit && <EditUser user={editingUser} fechar={closeModalEdit} />}      
      <ContainerCards>
      {showModalDelete && idDelete && (
        <ModalDelete>
          <Text>Tem certeza que deseja excluir este colaborador?</Text>
          <ButtonsModal>
            <ButtonRed onClick={deleteUsers}>Sim</ButtonRed>
            <ButtonGreen onClick={closeModalDelete}>Cancelar</ButtonGreen>
          </ButtonsModal>
        </ModalDelete>
      )}
        {users.map((user) => (
          <>
            <Cards key={user.id}>
              <li>
                <strong>Nome: </strong>
                {user.name} <br />
              </li>
              <li>
                <strong>Email: </strong>
                {user.email} <br />
              </li>
              <li>
                <strong>Setor: </strong>
                {user.role} <br />
              </li>
              <ButtonsModal>
                <ButtonRed onClick={() => openModalDelete(user)}>
                  Excluir
                </ButtonRed>
                <ButtonGreen onClick={() => openModalEdit(user)}>
                  Editar
                </ButtonGreen>
              </ButtonsModal>
            </Cards>
          </>
        ))}
      </ContainerCards>
    </>
  );
};

export default ListUsers;
