import React, { FC } from "react";
import { useRouter } from "next/router";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { SmallPokemon } from "@/interfaces";

import styles from "./styles.module.css";

const PokemonCard: FC<Pick<SmallPokemon, "id" | "image" | "name">> = ({
  id,
  name,
  image,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/name/${name}`);
  };
  return (
    <Card shadow="sm" key={id} isPressable onClick={handleClick}>
      <CardBody>
        <Image
          className={styles.image}
          src={image}
          alt={name}
          width={"300"}
          height={120}
        />
      </CardBody>
      <CardFooter>
        <b>{id}</b> -<p className="text-default-500 capitalize">{name}</p>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
