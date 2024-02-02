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

// const user = {
//   name: 'John',
//   nickname: 'Dier',
//   age: 30,
//   address: {
//     city: 'New York',
//     state: 'NY',
//   },
// };

// // const { name, nickname, ...rest } = user;
// // document.body.innerText = JSON.stringify(rest);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [first, , third, ...rest] = array;

// console.log(JSON.stringify({ first, third }));
// document.body.innerText = JSON.stringify(rest);
// document.body.innerText = JSON.stringify({ first, third, rest });

////////////////////////////////////////////////////////////////

// SHORT SINTAX

// const name = 'Igor';
// const age = 33;

// const user = {
//   name,
//   age,
// };

// document.body.innerText = JSON.stringify(user);

////////////////////////////////////////////////////////////////

// OPTIONAL CHAINING

// const user = {
//   name: 'John',
//   nickname: 'Dier',
//   age: 30,
//   address: {
//     city: 'New York',
//     // state: 'NY',
//     zip: {
//       code: '123456',
//       city: 'New York',
//     },
//     // showFullAddress() {
//     //   return 'ok';
//     // },
//   },
// };

// const key = 'state';

// document.body.innerText = user.address?.zip?.code ?? 'N/A';

// // So chama essa função caso ela exista
// document.body.innerText = user.address?.showFullAddress?.() ?? 'N/A';

// document.body.innerText = user.address?.[key] ?? 'N/A';

////////////////////////////////////////////////////////////////

// MÉTODOS DE ARRAY
// map, filter, every, some, find, findIndex, reduce

// const array = [1, 2, 3, 4, 5, 6];

// for (const i of array) {
//   document.body.innerText += i;
// }

// For Each não retorna um valor
// array.forEach(item => {
//   document.body.innerText += item;
// });

// const newArray = [];
// array.forEach(item => {
//   newArray.push(item * 2);
// });
// document.body.innerText = JSON.stringify(newArray);

// MAP ///////////////////////////////////////////////////////////////////////
// sempre retorna um array do tamanho do vector original
// Transformar o array em um novo array
// const novoArray = array.map(item => {
//   if (item % 2 === 0) {
//     return item * 2;
//   }
//   return item;
// });
// document.body.innerText = JSON.stringify(novoArray);

// FILTER //////////////////////////////////////////////////////////////////
//const array = [1, 2, 3, 4, 5, 6];

// const newArray = array.map(item => {
//   if (item % 2 === 0) {
//     return item * 2;
//   }
//   return item;
// });
// document.body.innerText = JSON.stringify(newArray);

// // Retorna uma parte do array
// const newArray2 = newArray.filter(item => item % 2 !== 0);
// document.body.innerText = JSON.stringify(newArray2);

// const newArray3 = array.filter(item => item % 2 !== 0).map(item => item * 10);
// document.body.innerText = JSON.stringify(newArray3);

// EVERY /////////////////////////////////////////////////////////////////
// Retorna um booleano TRUE or FALSE
// Se todos os itens satisfazem a condição, retorna TRUE

// const array = [1, 2, 3, 4, 5, 'ig'];

// const allItensAreNumbers = array.every(item => {
//   return typeof item === 'number';
// });
// document.body.innerText = JSON.stringify(allItensAreNumbers);

// SOME /////////////////////////////////////////////////////////////////

// const atLeastOneNumberIsNotNumber = array.some(item => {
//   return typeof item !== 'number';
// });
// document.body.innerText = JSON.stringify(atLeastOneNumberIsNotNumber);

// FIND /////////////////////////////////////////////////////////////////
// Encontrar um item dentro do array
// Ele encontrar o primeiro item que satisfaça a condição

// const even = array.find(item => item % 2 === 0);
// document.body.innerText = JSON.stringify(even);

// FIND INDEX ///////////////////////////////////////////////////////////////
// Retorna o índice do primeiro item que satisfaça a condição
// const even = array.findIndex(item => item % 2 === 0);
// document.body.innerText = JSON.stringify(even);

// REDUCE ///////////////////////////////////////////////////////////////
// Pegar o array e criar uma nova estrutura de base usando o array
// const array = [1, 2, 3, 4, 5, 6];

// const sum = array.reduce((acc, item) => {
//   document.body.innerText += acc + ',' + item + ' ---- ';

//   return acc + item;
// }, 0);
// document.body.innerText = JSON.stringify(sum);

////////////////////////////////////////////////////////////////

// PROMISES ///////////////////////////////////////////////////////////
// .then, .catch

// const sumTwoNumbers = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(a + b);
//     }, 2000);
//   });
// };

// sumTwoNumbers(1, 2)
//   .then(soma => {
//     document.body.innerText = JSON.stringify(soma);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// fetch('https://api.github.com/users/Igorth')
//   .then(response => {
//     response.json().then(body => {
//       console.log(body);
//     });
//   })
//   .catch(err => {
//     console.log('---ERR-----');
//     console.log(err);
//   });

// fetch('https://api.github.com/users/Igorth')
//   .then(response => {
//     return response.json();
//   })
//   .then(body => {
//     console.log(body);
//   })
//   .catch(err => {
//     console.log('---ERR-----');
//     console.log(err);
//   });

async function fetchGithubUser() {
  try {
    const response = await fetch('https://api.github.com/users/Igorth');
    const body = await response.json();
    console.log(body);

    return body.name;
  } catch (err) {
    console.log(err);
  }
}

const name = fetchGithubUser();
console.log(name);

fetchGithubUser().then(name => {
  console.log(name);
});
