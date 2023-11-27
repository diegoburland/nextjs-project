import Layout from "@/components/layouts/Layout/Layout";
import React, { useEffect, useState } from "react";
import { Card } from "@nextui-org/react";
import { localFavorites } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.getFavorites());
  }, []);

  return (
    <Layout>
      {favorites.length === 0 ? (
        <>No hay nada!</>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {favorites.map((id) => (
            <Card key={id}>
              <Link href={`/pokemon/${id}`}>
                <Image
                  alt="pokemon"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width={200}
                  height={200}
                />
              </Link>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default FavoritesPage;
