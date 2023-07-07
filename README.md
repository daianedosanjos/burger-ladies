<div align="center"> <img width= "400px" src= "./src/assets/ladies.png"> </div>
<br>

# Resumo do projeto

O projeto Burger Ladies foi criado para um pequeno restaurante de hambúrgueres que está crescendo e necessita de uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente.

Este projeto tem duas áreas: a interface (cliente) e a API (servidor). A interface está sendo desenvolvida utilizando o framework React.

O cliente nos deu um [link](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0) para a documentação que especifica o comportamento esperado da API HTTP que deve consumir. Aqui você pode encontrar todos os detalhes dos endpoints , como, por exemplo, quais parâmetros esperam, quais devem responder, etc.

---

<br>

### Logins e senhas:

~~~javascript 
  [ { "Adm": [
      { "email": "adm@lb.com", 
        "senha": 123456 
      } ] 
    }, 
    { "Atendente": [
      { "email": "atendente@lb.com",
        "senha": 123456
      } ] 
    },
    { "Cozinha": [
      { "email": "cozinha@lb.com", 
        "senha": 123456
      } ] 
    }
  ]
~~~~

---
<br>

### História do usuário 1

O garçom deve conseguir fazer login, se o administrador já tiver atribuído credenciais

**_"Como garçon, quero poder entrar no sistema de pedidos"._**

#### Critérios de aceitação

Acessar uma tela de login. <br>
Digitar e-mail e senha.<br>
Receber mensagens de erro compreensíveis, dependendo do que há de errado com as informações inseridas.<br>
Entrar no sistema de pedidos se as credenciais estiverem corretas.<br>

<br>
<div align="center"><img width="600px" src="./src/assets/image-1.png" alt="Tela de Login" title="Tela de Login"></div>
<br>
<div align="center"><img width="600px" src="./src/assets/image-2.png" alt="Tela Garçon" title="Tela Garçon"></div>

---
<br>

### História do usuário 2

O garçom deve ser capaz de anotar o pedido do cliente

**_"Como garçom, quero receber o pedido de um cliente para não depender da minha memória, para saber quanto cobrar e enviar para a cozinha para evitar erros e para que possam ser preparados na ordem."_**

#### Critérios de aceitação

Anotar o nome do cliente. <br>
Adicionar produtos ao pedido. <br>
Excluir produtos. <br>
Ver resumo e compra total. <br>
Enviar o pedido para a cozinha (salve em algum banco de dados).
Funcionar bem em um tablet.

<br>
<div align="center">
 <img width="600px" 
src="./src/assets/image-3.png" alt="Tela Garçon Novo Pedido" title="tela de menu"></div>
<br>
<div align="center">
 <img width="600px" 
src="./src/assets/image-5.png" alt="Tela Garçon Novo Pedido" title="carrinho"></div>

---
<br>

### História do usuário 3

O chef precisa ver os pedidos

**_"Como chefe de cozinha, quero ver os pedidos dos clientes em ordem e marcar quais estão prontos para saber o que precisa ser preparado e avisar aos atendentes que um pedido está pronto para ser servido a um cliente."_**

#### Critérios de aceitação

Visualizar os pedidos solicitados à medida que são feitos.<br>
Marcar os pedidos que foram preparados e estão prontos para serem servidos. <br>
Ver o tempo que levou para preparar o pedido desde a chegada até o momento em que foi marcado como concluído.
<br>
<div align="center"><img width="600px" src="./src/assets/image-8.png" alt="tela de pedidos" ></div>

---
<br>

### História do usuário 4

Os garçons devem ver os pedidos que estão prontos para serem entregues.

**_"Como garçom, quero ver os pedidos que estão prontos para serem entregues rapidamente aos clientes que os fizeram."_**

#### Critérios de aceitação

Veja a lista de pedidos prontos para servir.

<br>

<div align="center"><img width="600px" src="./src/assets/image-4.png" alt="Tela cozinha"></div>

---
<br>

### História do usuário 5

O gerente da loja precisa gerenciar seus funcionários

**_"Como administrador de loja, quero gerenciar os usuários da plataforma para manter as informações de meus funcionários atualizadas."_**

#### Critérios de aceitação

Veja a lista de trabalhadores.<br>
Adicionar trabalhadores.<br>
Excluir trabalhadores.<br>
Atualize os dados do trabalhador.

<br>
<div align="center"><img width="600px" src="./src/assets/image-9.png" alt="Tela Adm Itens do Menu"></div>
<br>
<div align="center"><img width="600px" src="./src/assets/image-10.png" alt="Tela registrar coloborador"></div>
<br>
<div align="center"><img width="600px" src="./src/assets/image-11.png" alt="Tela lista colaboradores"></div>

---
<br>

### História do usuário 6

O gerente da loja deve gerenciar seus produtos.

**_"Como administrador da loja deseja gerenciar os produtos para manter o cardápio atualizado."_**

#### Critérios de aceitação

Veja a lista de produtos. <br>
Adicione produtos. <br>
Excluir produtos.<br>
Atualize os dados do produto.

<br>

<div align="center"><img width="600px" src="./src/assets/image-9.png" alt="Tela Adm Itens do Menu" title="Tela Adm Itens do Menu"></div>
<br>
<div align="center"><img width="600px" src="./src/assets/image-13.png" alt="tela adicionar itens" ></div>
<br>
<div align="center"><img width="600px" src="./src/assets/image-12.png" alt="tela lista de ítens"></div>
