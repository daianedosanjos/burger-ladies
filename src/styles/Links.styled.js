import { Link } from "react-router-dom";
import styled from "styled-components";

export const AttendanceLink = styled(Link)`
  margin: auto;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  background-color: var(--marron-claro);
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: .7rem;
  color: white;


  :hover {
    background-color: var(--marron-escuro);
  }
`;

export const AdmLink = styled(Link)`
	margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  background-color: var(--marron-claro);
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: .7rem;
  `;
