function calculateRectangleArea(L, l) {
  return L * l;
}

console.warn(
  `Folosind functia calculateRectangleArea afiseaza suprafata unui dreptunghi de 4 pe 3`,
);

console.log(calculateRectangleArea(4, 3));

console.warn(
  `Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.`,
);

const rectangle1Surface = calculateRectangleArea(5, 3);
const rectangle2Surface = calculateRectangleArea(3, 2);
console.log(rectangle1Surface + rectangle2Surface);

// pt pixeltab verde
console.log(rectangle2Surface);
console.log(rectangle1Surface);
