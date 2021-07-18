//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (num) => {
  let curMult = 1;
  let i = 2;
  let multipliers = []

  while (num > 1) {
    let res = multipliers.reduce((acc, n) => acc *= n, 1);
    if (res === num) {
	   return res;
    }

    if (num % i === 0) {
      curMult *= i;
      multipliers.push(i)
      num /= i;
    } else {
      i++;
    }
		// console.log(multipliers)
  }

  return 'error'
};
