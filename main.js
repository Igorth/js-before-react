// Nullish coalescing operator.

const age = 0;

// 0, '', [], false, undefined, null => falsy
document.body.innerText = `Your age is ${age ?? 'Não Informado'} years old`;
