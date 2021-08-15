//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = (() => {
  let result = "";
  const a = 97;
  const z = 122;
  let idx = a;

  while (idx <= z) {
    result += String.fromCharCode(idx);
    idx++;
  }
  return result;
})();

export const isPangram = (str) => {
  return (
    new Set(
      str
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .split(""),
    ).size >= alphabet.length
  );
};
