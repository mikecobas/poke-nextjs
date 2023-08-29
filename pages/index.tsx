import { NextPage, GetStaticProps } from "next";
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import Layout from "../components/layouts/Layout";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import PokemonCard from '../components/ui/PokemonCard';
interface Props {
  pokemons: SmallPokemon[];
}
const HomePage: NextPage<Props> = ({pokemons}) => {
  return (
    <Layout title="Listado de Pokemons">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {pokemons.map(({id, name, img, url}) => (
   
            <PokemonCard key={id} id={id} name={name} img={img} url={url} />

        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};
export default HomePage;
