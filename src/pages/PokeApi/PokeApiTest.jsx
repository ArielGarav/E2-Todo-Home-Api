import axios from "axios";

import React, { useEffect, useState } from "react";
import {
  CardContainer,
  DivPokeImput,
  P,
  PokeHability,
  PokeImg,
  PokeImput,
  Pokename,
  Weight,
} from "./PokeApiTestStyles";
const PokeApiTest = () => {
  const [data, setdata] = useState();
  const [name, setname] = useState();
  const [weight, setWeight] = useState();
  const [number, setNumber] = useState(1);
  URL = `https://pokeapi.co/api/v2/pokemon/${number}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        // console.log(response.data);
        setdata(response.data);
        setname(response.data.name);
        setWeight(response.data.weight);
      })
      .catch((err) => {
        windows.alert(err);
      });
  }, [URL]);
  const show = () => {
    URL = `https://pokeapi.co/api/v2/pokemon/${number}`;
  };

  return (
    <>
      <DivPokeImput>
        <PokeImput
          type={"number"}
          placeholder="Enter Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </DivPokeImput>

      <CardContainer>
        <Pokename>Name : {name}</Pokename>
        <Weight>Weight : {weight}</Weight>

        <PokeImg
          src={
            data
              ? data.sprites.other.dream_world.front_default
              : "<p>Loading</p>"
          }
        />
        <P>My abilities are:</P>
        {data
          ? data.abilities.map((value, key) => {
              return (
                <PokeHability key={key}>{value.ability.name}</PokeHability>
              );
            })
          : ""}
      </CardContainer>
    </>
  );
};

export default PokeApiTest;
