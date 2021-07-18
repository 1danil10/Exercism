//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//variant 1
export const reverseString = (str) => {
  if (str.length === 0) {
    return "";
  }
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

//variant 2
// export const reverseString = (str) => {
//   if (str.length === 0) {
//     return "";
//   }
//   return str.split("").reverse().join("");
// };
