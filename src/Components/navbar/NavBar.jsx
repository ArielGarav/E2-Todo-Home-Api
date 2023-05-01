import styled from "styled-components";
import { MdCatchingPokemon, MdListAlt, MdOutlineHome } from "react-icons/md";
import { LinkContainer, LinkItemStyled, NavContainer } from "./Navbar_Styles";

import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const taskList = useSelector((state) => state.tasks);

  const incompleteTasks = taskList.filter((task) => !task.completed);
  const hasIncompleteTasks = incompleteTasks.length > 0;

  return (
    <>
      <NavContainer>
        <h2
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Entrega 3°
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
            to={"TodoList"}
            className={hasIncompleteTasks ? "incomplete" : ""}
          >
            To-Do-List <MdListAlt />
          </LinkItemStyled>
        </LinkContainer>
      </NavContainer>
    </>
  );
}

export default Navbar;
