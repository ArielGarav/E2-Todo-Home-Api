import styled from "styled-components";

export const ContainerTask = styled.div`
  color: white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
  font-weight: 800;
  font-size: 16px;
  height: 42px;
  :hover {
    color: black;
  }
`;

export const Description = styled.p`
  color: white;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px;
`;
export const Name = styled.h3`
  color: black;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15px;
`;
