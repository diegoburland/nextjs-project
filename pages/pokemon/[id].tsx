import { pokeApi } from "@/api";
import Layout from "@/components/layouts/Layout/Layout";
import PokemonDetail from "@/components/pokemon/PokemonDetail/PokemonDetail";
import { PokemonResponse } from "@/interfaces";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
  pokemon: PokemonResponse;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <PokemonDetail {...pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths:
      pokemons151.map((pokemon) => ({
        params: {
          id: pokemon,
        },
      })) || [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  try {
    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${id}`);
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
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default PokemonPage;
