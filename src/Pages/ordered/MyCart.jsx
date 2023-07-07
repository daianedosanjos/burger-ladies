import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Return, SizeCart } from "./MyCart.styled";
import { ContainerCart } from "./MyCart.styled";
import { ButtonMenu } from "../../styles/Button.styled";
import Header from "../../Components/header/Header";
import { MdOutlineMenuBook } from "react-icons/md";
import { useState } from "react";

const MyCart = ({ size, setShow }) => {

  return (
    <>
      <ContainerCart>
        <Header />                 
        <Return>
          <ButtonMenu onClick={() => setShow(true)}>
          <MdOutlineMenuBook size={30} color="#eee2e2"/>
          <br />
          Ver Menu
          </ButtonMenu>
        </Return>
  
        <Link onClick={() => setShow(false)}>
          <FaCartPlus size={40} weight="bold" color="#03300b" />
          <SizeCart>{size}</SizeCart>
        </Link>
      </ContainerCart>
    </>
  );
};

export default MyCart;
