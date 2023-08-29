import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { pokeApi } from "@/api";
import Layout from "@/components/layouts/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import confetti from "canvas-confetti";
import { Pokemon } from "@/interfaces";
import { PokemonListResponse } from "@/interfaces";
import localFavorites from "@/utils/localFavorites";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { getPokemonInfo } from "@/utils";

interface Props {
  pokemon: any;
}
const PokemonPage: FC<Props> = ({ pokemon }) => {
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFav(!isInFav);
    if (isInFav) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };
  const [isInFav, setIsInFav] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  return (
    <Layout title={`Pokemon ${pokemon.id} - ${pokemon.name}`}>
      <div className="flex flex-row gap-8 flex-wrap  w-full justify-center">
        <Card isHoverable className="w-11/12 sm:w-5/12 md:w-4/12 lg:w-3/12">
          <CardBody>
            <Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                "/no.image.png"
              }
              alt={pokemon.name}
              className="w-full h-64"
              width="100%"
              height="auto"
            />
          </CardBody>
        </Card>
        <Card className="w-11/12 sm:w-5/12 md:w-7/12 lg:w-8/12">
          <CardHeader className="flex justify-between">
            <h1 className="text-2xl capitalize">{pokemon.name}</h1>
            <Button
              variant="light"
              isIconOnly
              color={isInFav ? "warning" : "primary"}
              onClick={onToggleFavorite}
            >
              {isInFav ? (
                <MdOutlineFavorite className="text-2xl" />
              ) : (
                <MdOutlineFavoriteBorder className="text-2xl" />
              )}
            </Button>
          </CardHeader>
          <CardBody>
            <h2>Sprites</h2>
            <div className="flex flex-row gap-2">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={150}
                height={150}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={150}
                height={150}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={150}
                height={150}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={150}
                height={150}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const { data } = await  // your fetch function here
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons151: string[] = [...data.results].map(
    (pokemon, index) => `${pokemon.name}`
  );

  return {
    paths: pokemons151.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonPage;
