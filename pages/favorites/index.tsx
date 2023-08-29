import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { pokeApi } from "@/api";
import Layout from "@/components/layouts/Layout";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { SmallPokemon } from "@/interfaces";
import PokemonCard from "@/components/ui/PokemonCard";
import { Image } from "@nextui-org/react";
import NoFavorites from "@/components/ui/NoFavorites";
import localFavorites from "@/utils/localFavorites";
import FavoriteCardPokemon from "@/components/ui/FavoriteCardPokemon";
import FavoritePokemonList from "@/components/ui/FavoritePokemonList";

interface Props {
  pokemons: SmallPokemon[];
}
const Favorites: NextPage<Props> = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons().sort());
  }, []);
  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
      <FavoritePokemonList favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
