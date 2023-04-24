import styled from "styled-components";
import { MdCatchingPokemon, MdListAlt, MdOutlineHome } from "react-icons/md";
import { LinkContainer, LinkItemStyled, NavContainer } from "./Navbar_Styles";

import { useNavigate } from "react-router";
import { TodoContext } from "../../pages/CreateCONTEXT/TodoContext";
import { useContext } from "react";

function Navbar() {
  const { hasIncompleteTodos } = useContext(TodoContext);
  const navigate = useNavigate();
  return (
    <>
      <NavContainer>
        <h2
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Entrega 2°
        </h2>
        <LinkContainer>
          <LinkItemStyled to={"/"}>
            Home
            <MdOutlineHome />
          </LinkItemStyled>
          <LinkItemStyled to={"PokeApi"}>
            Poke Api
            <MdCatchingPokemon />
          </LinkItemStyled>
          <LinkItemStyled
            className={hasIncompleteTodos ? "incomplete" : ""}
            to={"TodoList"}
          >
            To-Do-List <MdListAlt />
          </LinkItemStyled>
        </LinkContainer>
      </NavContainer>
    </>
  );
}

export default Navbar;
