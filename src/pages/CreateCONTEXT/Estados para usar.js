import styled from "styled-components";
export const ContainerPrincipal = styled.div`
  width: 100vw;
  min-width: 320px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const Formulario = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const ButtonAdd = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  vertical-align: middle;
  border: 1px solid;
  border-radius: 6px;
  color: #ffffff;
  background-color: #2ea44f;
  border-color: #1b1f2326;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  :hover {
    background-color: #2c974b;
    border-color: #1b1f2326;
    transition-duration: 0.1s;
  }
`;
export const ButtonDelete = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border-radius: 40px;
  border: 2px solid #ff4742;
  color: #fff;
  background-color: #ff4742;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
  font-weight: 800;
  font-size: 16px;
  height: 42px;
  :hover {
    color: black;
  }
`;
export const Input = styled.input`
  padding: 6px 12px;
  background: rgb(31, 32, 35);
  border: 1px solid rgb(60, 63, 68);
  border-radius: 40px;
  font-size: 13px;
  color: rgb(247, 248, 248);
  height: 24px;
  appearance: none;
  transition: border 0.15s ease 0s;
  :focus {
    outline: none;
    box-shadow: none;
    border-color: rgb(100, 153, 255);
  }
`;
export const Ul = styled.ul`
  color: white;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px;
`;
export const LI = styled.li`
  background-color: white;
  color: black;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  justify-content: end;
  gap: 40px;
  border: 1px solid black;
  margin: 5px;
`;
// import { MdDelete } from "react-icons/md";
// import {
//   ButtonAdd,
//   ButtonDelete,
//   ContainerPrincipal,
//   Formulario,
//   Input,
//   LI,
//   Ul,
// } from "./TodoListStyles";

//  {/* {errorMessage && <ErrorMessage message={errorMessage} />} */}
// import ErrorMessage from "../../Components/ErrorMsj/Error";
