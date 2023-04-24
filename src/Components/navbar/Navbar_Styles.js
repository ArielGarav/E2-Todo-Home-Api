import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: white;
    font-weight: 700;
    span {
      font-weight: bold;
    }
  }
`;
export const LinkItemStyled = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 40px;
  display: flex;
  gap: 5px;
  align-items: center;
  &.incomplete {
    color: red;
    font-size: 25px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
