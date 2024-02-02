// Nullish coalescing operator.

// const age = 0;

// // 0, '', [], false, undefined, null => falsy
// document.body.innerText = `Your age is ${age ?? 'Não Informado'} years old`;

////////////////////////////////////////////////////////////////

// Objetos

const user = {
  name: 'John',
  nickname: 'Dier',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY',
  },
};

// document.body.innerText = 'name' in user;
// document.body.innerText = Object.keys(user);
// document.body.innerText = Object.values(user);
// document.body.innerText = JSON.stringify(Object.values(user));
// document.body.innerText = JSON.stringify(Object.entries(user));

// DESESTRUTURAÇÃO

// const address = user.address;
// document.body.innerText = JSON.stringify(address);

const { name: firstName, address, nickname = 'Igor' } = user;
// document.body.innerText = JSON.stringify({ firstName, address, nickname });

function showAge({ age }) {
  return age;
}
document.body.innerText = JSON.stringify(showAge(user));
