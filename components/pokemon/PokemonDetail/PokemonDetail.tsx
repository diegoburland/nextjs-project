import React from "react";

import confetti from "canvas-confetti";

import { PokemonResponse } from "@/interfaces";
import { localFavorites } from "@/utils";
import HeartIcon from "@/utils/HeartIcon";
import { Button, Image } from "@nextui-org/react";

const PokemonDetail = ({ name, id, sprites }: PokemonResponse) => {
  const [isInFavorite, setIsFavorite] = React.useState(
    localFavorites.existInFavorites(id)
  );
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(id);
    setIsFavorite(!isInFavorite);

    if (!isInFavorite) {
      confetti({
        particleCount: 300,
        spread: 60,
        origin: {
          y: 0,
        },
      });
    }
  };
  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image
              src={
                sprites.other?.dream_world.front_default ||
                sprites.front_default
              }
              alt={
                sprites.other?.dream_world.front_default ||
                sprites.front_default
              }
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <h2 className="sr-only">Product information</h2>
            <div className="">
              <Button
                isIconOnly
                color="danger"
                aria-label="Like"
                onClick={onToggleFavorite}
              >
                <HeartIcon filled={isInFavorite} />
              </Button>
            </div>
            <p className="text-3xl tracking-tight text-gray-900">{name}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Image
                    src={sprites.front_default}
                    alt={name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={sprites.back_default}
                    alt={name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={sprites.front_shiny}
                    alt={name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={sprites.back_shiny}
                    alt={name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
