import React, { useState } from "react";
import pokeball from "../image/pokeball.svg";
import pokemonlogo from "../image/pokemonlogo.png";
import Icon from "../image/Icon";
import Axios from "axios";
import Card from "./card";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searched, setSerched] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    weight: "",
    height: "",
    xp: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = async () => {
    await Axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`).then(
      (res) => {
        setPokemon({
          name: search,
          species: res.data.species.name,
          img: res.data.sprites.other.dream_world.front_default,
          weight: res.data.weight,
          height: res.data.height,
          xp: res.data.base_experience,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          type: res.data.types[0].type.name,
        });
        setSerched(true);
      }
    );
  };

  return (
    <div>
      <div className="flex justify-between bg-[#17171A] text-white h-20 pl-40  w-full p-[30px]">
        <div className="flex ">
          <img
            alt="logo"
            className="item-center h-20 -mt-7 ml-20"
            src={pokemonlogo}
          />
          <img
            alt="logo"
            className="h-10 -mt-2 -ml-20"
            src={pokeball}
            width={220}
            height={220}
          />
        </div>

        <div className="flex items-center mr-40 justify-center  rounded bg-[#171924]">
          <input
            type="text"
            className="bg-transparent outline-none text-white w-70 ml-3"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={() => searchPokemon()}>
            <Icon />
          </button>
        </div>
      </div>
      <div className="">
        {!searched ? (
          <h1>s </h1>
        ) : (
          <Card
            className="p-10"
            name={pokemon.name}
            species={pokemon.species}
            img={pokemon.img}
            xp={pokemon.xp}
            weight={pokemon.weight}
            height={pokemon.height}
            hp={pokemon.hp}
            attack={pokemon.attack}
            defense={pokemon.defense}
            type={pokemon.type}
          />
        )}
      </div>
    </div>
  );
};

export default Home;

//  <div className="flex mt-40 w-1/3">
//       <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <img
//           className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
//           src={img}
//           alt=""
//         />
//         <div class="flex flex-col justify-between p-4 leading-normal">
//           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             Noteworthy technology acquisitions 2021
//           </h5>
//           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             Here are the biggest enterprise technology acquisitions of 2021 so
//             far, in reverse chronological order.
//           </p>
//         </div>
//       </div>
//     </div>
