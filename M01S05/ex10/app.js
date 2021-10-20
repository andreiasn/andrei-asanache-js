function calculateSurface(L, l) {
  if (arguments.length === 2) {
    return L * l;
  } else {
    return L ** 2;
  }
}

console.warn(
  `Creeaza un wrapper numit calculateSquareSurface() pentru calculateSurface() care sa primeasca un singur parametru si sa calculeze suprafata unui patrat.`,
);

const calculateSquareSurface = (L) => {
  return calculateSurface(L);
};
