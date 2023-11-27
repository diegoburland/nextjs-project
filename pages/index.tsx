import { Inter } from "next/font/google";
import Layout from "@/components/layouts/Layout/Layout";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = (props) => {
  const { pokemons } = props;

  return (
    <Layout title="Home page">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {pokemons.map(({ image, id, name }) => (
          <PokemonCard key={id} id={id} name={name} image={image} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons = data.results.map((pokemon) => {
    const id = pokemon.url.split("pokemon/")[1].replace("/", "");
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    return {
      ...pokemon,
      id,
      image,
    };
  });

  return {
    props: {
      title: "Home page",
      pokemons,
    },
  };
};

export default HomePage;
