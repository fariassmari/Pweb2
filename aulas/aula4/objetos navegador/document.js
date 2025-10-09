// Document Object Model
// Representa a estrutura do documento HTML
const body = document.body;
console.log(body);

// Mostra o título da página
console.log(document.title);

// Seleciona um elemento pelo ID e altera seu conteúdo
const passwordElement = document.getElementById('password');
console.log(passwordElement.value);

// Seleciona um elemento pelo seletor CSS e altera seu valor
const password = document.querySelector('#password');
password.value = 'newPassword123';
console.log(password.value);

// Seleciona todos os elementos de input e exibe seus valores
const inputs = document.querySelector('input');
Array.from(inputs).map(i => i.value);
console.log(inputs);

document.write('<h2>Adding HTML with JavaScript</h2>');

// Seleciona um elemento e exibe seu conteúdo HTML
let conteudo = document.getElementById("mensagem").innerHTML;
console.log(conteudo);

// Altera o conteúdo HTML de um elemento
document.getElementById("mensagem").innerHTML = "New Message";