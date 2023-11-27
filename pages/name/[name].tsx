import { pokeApi } from "@/api";
import Layout from "@/components/layouts/Layout/Layout";
import PokemonDetail from "@/components/pokemon/PokemonDetail/PokemonDetail";
import { PokemonListResponse, PokemonResponse } from "@/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";

interface Props {
  pokemon: PokemonResponse;
}

const PokemonByNamePage: FC<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <PokemonDetail {...pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemonNames = data.results.map(({ name }) => name);
  return {
    paths:
      pokemonNames.map((pokemon) => ({
        params: {
          name: pokemon,
        },
      })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${name}`);
  const pokemon = {
    name: data.name,
    id: data.id,
    sprites: data.sprites,
  };
  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  };
};

export default PokemonByNamePage;
