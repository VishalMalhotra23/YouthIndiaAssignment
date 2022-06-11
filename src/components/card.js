import React from "react";

const card = ({
  name,
  type,
  weight,
  height,
  species,
  xp,
  hp,
  attack,
  defense,
  img,
}) => {
  const colors = {
    water: "#DEF3FD",
    rock: "#d5d5d4",
    poison: "#98d7a5",
    dragon: "#97b3e6",
  };
  height = height / 10;

  var style = `flex   justify-center mt-44 items-center flex-col pb-5 bg-[#98d7a5] h-96 overflow-visible  border-solid  w-1/4 rounded-3xl border-4  m-auto`;
  return (
    <div className="flex">
      <div className={style}>
        <img
          className="-mt-28 h-40 justify-center  w-2/5 mx-auto"
          src={img}
          alt=""
        />
        <h1 className="text-6xl pt-8 font-bold justify-center text-white capitalize">
          {name}
        </h1>
        <h1 className="text-xl font-bold pt-8  mx-auto justify-center text-white capitalize">
          type: {type}
        </h1>
        <div className="flex justify-between pt-6">
          <h1 className="mx-auto pr-8 justify-center text-white capitalize">
            defense: {defense}
          </h1>
          <h1 className="mx-auto justify-center text-white capitalize">
            hp: {hp}
          </h1>
          <h1 className="mx-auto pl-8 justify-center text-white capitalize">
            attack: {attack}
          </h1>
        </div>
        <div className="flex justify-between pt-6">
          <h1 className="mx-auto pr-7 text-white capitalize">
            Height: {height} <span className="normal-case">m</span>
          </h1>
          <h1 className="mx-auto pl-3 text-white capitalize">XP: {xp}</h1>
          <h1 className="mx-auto pl-8 text-white capitalize">
            weight: {weight} kg
          </h1>
        </div>
      </div>
    </div>
  );
};

export default card;
