const toggleFavorite = (id: number) => {
  console.log("toggleFavorite llamado");
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((fav) => fav !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id);
};

const getFavorites = (): number[] => {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default { toggleFavorite, existInFavorites, getFavorites };
