import { ReactElement } from "react";
import { Image } from "@nextui-org/react";
const NoFavorites = ():ReactElement => {
  return (
    <div className="flex flex-col h-[100vh - 100px] items-center justify-center self-center">
      <h1 className="text-2xl">No hay Favoritos </h1>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
        alt="icono app"
        width={240}
        height={240}
      />
    </div>
  );
};

export default NoFavorites;
