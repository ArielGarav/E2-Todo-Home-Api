import styled from "styled-components";
export const CardContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 97%;
`;
export const Pokename = styled.h2`
  text-align: center;
  font-weight: 600;
`;
export const Weight = styled.h3`
  text-align: center;
  font-weight: 600;
`;

export const P = styled.p`
  color: dark;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 2rem;
`;
export const PokeImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;
export const PokeHability = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  color: black;
`;
export const DivPokeImput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeImput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 17px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  border-radius: 40px;
`;
