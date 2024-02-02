// Nullish coalescing operator.

// const age = 0;

// // 0, '', [], false, undefined, null => falsy
// document.body.innerText = `Your age is ${age ?? 'Não Informado'} years old`;

////////////////////////////////////////////////////////////////

// Objetos

// const user = {
//   name: 'John',
//   nickname: 'Dier',
//   age: 30,
//   address: {
//     city: 'New York',
//     state: 'NY',
//   },
// };

// document.body.innerText = 'name' in user;
// document.body.innerText = Object.keys(user);
// document.body.innerText = Object.values(user);
// document.body.innerText = JSON.stringify(Object.values(user));
// document.body.innerText = JSON.stringify(Object.entries(user));

// DESESTRUTURAÇÃO

// const address = user.address;
// document.body.innerText = JSON.stringify(address);

// const { name: firstName, address, nickname = 'Igor' } = user;
// document.body.innerText = JSON.stringify({ firstName, address, nickname });

// function showAge({ age }) {
//   return age;
// }
// document.body.innerText = JSON.stringify(showAge(user));

////////////////////////////////////////////////////////////////

// REST OPERATOR

const user = {
  name: 'John',
  nickname: 'Dier',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY',
  },
};

// const { name, nickname, ...rest } = user;
// document.body.innerText = JSON.stringify(rest);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, , third, ...rest] = array;

console.log(JSON.stringify({ first, third }));
document.body.innerText = JSON.stringify(rest);
document.body.innerText = JSON.stringify({ first, third, rest });

////////////////////////////////////////////////////////////////
