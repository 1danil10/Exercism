//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(n) {
    this.array = Array.from(Array(n), (_, i) => i + 1);
  }

  get sumOfSquares() {
    if (this._sumOfSquares) {
      return this._sumOfSquares;
    }
    this._sumOfSquares = this.array.reduce((sum, num) => (sum += num ** 2), 0);
    return this._sumOfSquares;
  }

  get squareOfSum() {
    if (this._squareOfSum) {
      return this._squareOfSum;
    }
    this._squareOfSum = this.array.reduce((sum, num) => (sum += num), 0) ** 2;
    return this._squareOfSum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
