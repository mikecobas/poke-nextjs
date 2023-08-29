import { ReactElement } from "react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";
interface ListPokemons {
  favoritePokemons: number[];
}
const FavoritePokemonList = ({ favoritePokemons }: ListPokemons):ReactElement => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {favoritePokemons.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </div>
  );
};

export default FavoritePokemonList;
