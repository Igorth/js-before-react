// Nullish Coalescing Operators
// Operador para lidar com valores nulos
// Nullish: null and undefined

const nome = null;
document.body.innerText = `Olá ${nome ?? 'Anônimo'}!`;

const idade = null;
document.body.innerText = `Você tem ${idade ?? 'Não informado'} anos.`;

const numGuests = null;
document.body.innerText = `O restaurante possui ${numGuests ?? 10} pessoas.`;