import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { pokeApi } from "@/api";
import Layout from "@/components/layouts/Layout";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { SmallPokemon } from "@/interfaces";
import PokemonCard from "@/components/ui/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}
const Favorites: NextPage<Props> = () => {
  return (
    <Layout title="Favoritos">
   
  </Layout>
  )
}

export default Favorites