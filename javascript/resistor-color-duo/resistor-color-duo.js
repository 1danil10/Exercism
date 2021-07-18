//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (array) => {
  const idx1 = COLORS.indexOf(array[0]);
  const idx2 = COLORS.indexOf(array[1]);
 return idx1 * 10 + idx2;
};

console.log(decodedValue("brown", "green"));
