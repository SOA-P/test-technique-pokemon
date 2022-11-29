import { useState, useEffect } from "react";
import axios from "axios";
import CardDetailsPokemon from "./CardDetailsPokemon";

export default function DetailsPokemon() {
  const [data, setData] = useState({});
  const [current, setCurrent] = useState(144);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${current}`)
      .then((res) => setData(res.data));
  }, [current]);

  return (
    <div>
      <ul>{data.id && <CardDetailsPokemon CardPokemon={data} />}</ul>
      <button
        className="btn-1"
        type="button"
        onClick={() => {
          setCurrent(current + 1);
        }}
      >
        Prev
      </button>
      <button
        className="btn-2"
        type="button"
        onClick={() => {
          setCurrent(current - 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
