// Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.

// function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);
// // Ok!

const promiseCreator = (time, value) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(value), time);
  });
};

// const prom = promiseCreator(2500, "Ok!");
// prom.then(console.log);
