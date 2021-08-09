//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (str) => {
  if (str.length === 0) {
    return str;
  }

  const upperStr = str.toUpperCase();
  let res = "";
  const rna = {
    A: "U",
    C: "G",
    G: "C",
    T: "A",
  };

  for (let i = 0; i < upperStr.length; i++) {
    const char = upperStr[i];
    if (rna[char] !== undefined) {
      res += rna[char];
    }
  }
  return res;
};
