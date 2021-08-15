//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._isOpen = false;
  }

  open() {
    this._balance = 0;
    if (!this._isOpen) {
      this._isOpen = true;
    } else {
      throw new ValueError();
    }
  }

  close() {
    delete this._balance;
    if (this._isOpen) {
      this._isOpen = false;
    } else {
      throw new ValueError();
    }
  }

  deposit(val) {
    const isPositive = val > 0;
    if (this._isOpen && isPositive) {
      this._balance += val;
    } else {
      throw new ValueError();
    }
  }

  withdraw(val) {
    const isPositive = val > 0;
    const isInBalanceRange = val <= this._balance;

    if (this._isOpen && isPositive && isInBalanceRange) {
      this._balance -= val;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this._isOpen) {
      return this._balance;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
