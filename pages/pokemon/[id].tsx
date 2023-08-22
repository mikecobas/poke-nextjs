import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { pokeApi } from "@/api";
import Layout from "@/components/layouts/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { Pokemon } from "@/interfaces";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface Props {
  pokemon: any;
}
const PokemonPage: FC<Props> = ({ pokemon }) => {
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
              width='100%'
              height='auto'
            />
          </CardBody>
        </Card>
        <Card className="w-11/12 sm:w-5/12 md:w-7/12 lg:w-8/12">
          <CardHeader className="flex justify-between">
            <h1 className="text-2xl capitalize">{pokemon.name}</h1>
            <Button color='primary'>Guardar en Favoritos</Button>
          </CardHeader>
          <CardBody>
            <h2>Sprites</h2>
            <div className="flex flex-row gap-2" >
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
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
