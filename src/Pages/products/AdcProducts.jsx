import { useState } from "react";
import { toast } from "react-toastify";
import { createProducts } from "../../services/api";
import { ButtonForm } from "../../styles/Button.styled";
import Header from "../../Components/header/Header";
import Formulary from "../../Components/formulary/Formulary";
import { MainForm, Form, Container } from "../../Components/formulary/Form.styled";
import Select from "../../Components/select/Select";

function AdcProducts() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => setDescription(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleAmount = (e) => setAmount(e.target.value);

  function addProdutos(e) {
    e.preventDefault();
    if (name === "" || description === "" || price === "" || type === "" || category === "" || amount === "" ) {
      return toast.error("Por favor, preencha todos os dados");
    }
    createProducts(name, description, price, type, category, amount)
      .then((response) => {
        if(response.status === 401) {
        toast.error("Por favor, faça login novamente!") 
        navigate("/");
        }else if (response.ok) {
          toast.success("Produto adicionado com sucesso!");
         }
        setName("");
        setDescription("");
        setPrice("");
        setType("");
        setCategory("");
        setAmount("");
      })
      .catch(() =>
        toast.error("Algo deu errado, confira os dados e tente novamente!")
      );
  }

  return (
    <>
      <Header />
      <MainForm>
        <Container>
        <Form onSubmit={addProdutos}>
          <h4>Adicionar ítem ao cardápio</h4>
          <Formulary
            text="Nome"
            type="text"
            value={name}
            name="name"
            placeholder="Digite o nome ítem"
            onChange={handleName}
          ></Formulary>
          <Formulary
            text="Descrição"
            type="text"
            value={description}
            name="descrição"
            placeholder="Descrição do ítem"
            onChange={handleDescription}          
          ></Formulary>
          <Formulary
            text="Preço"
            type="text"
            value={price}
            name="price"
            placeholder="Digite o preço"
            onChange={handlePrice}
          ></Formulary>
          <Formulary
            text="Quantidade"
            type="text"
            value={amount}
            name="amount"
            placeholder="Digite a quantidade"
            onChange={handleAmount}
          ></Formulary>
          <Select
            text="Tipo"
            value={type}
            value1="Café da manhã"
            value2="Menu Principal"
            value3=" "
            value4=" "
            name={`${type} || Tipo`}
            placeholder="Selecione o tipo do ítem"
            onChange={handleType}
          ></Select>
          <Select
            text="Categoria"
            value={category}
            value1="Lanches"
            value2="Bebidas"
            value3="Hambúrgueres"
            value4="Acompanhamentos"
            name= {`${category} || Categoria`}
            placeholder="Selecione a categoria do ítem"
            onChange={handleCategory}
          ></Select>

          <ButtonForm type="submit">Adicionar item ao cardápio</ButtonForm>
        </Form>
        </Container>
      </MainForm>
    </>
  );
}

export default AdcProducts;
