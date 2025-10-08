// Strings 
console.log('Hello world');
console.log("Hello world");
console.log(`hello world`);
console.log(String('Hello world'));
console.log(new String('Hello world'));

// Casos especiais
console.log('<img src="url">');
console.log("<img src=\"url\">");
console.log("Hello' world");

// Concatenação e template literals
// Exemplo 1
const name = 'John';
console.log('Hello ' + name);

// Exemplo 2
const nome = 'John';
const email = 'john@email.com';
const id = '1';

const row = '<tr><td>' + id + '</td><td>' + nome + '</td><td>' + email + '</td></tr>';
 
console.log(row);

// Exemplo 3
const raw = `<tr><td>${id}</td><td>${nome}</td><td>${email}</td></tr>`;
 
console.log(row);

// Objeto String

// Retorna tamanho da string
console.log('Lorem ipsum'.length);

// Retorna se a palavra esta dentro da string
console.log('Lorem ipsum'.includes('Lorem'));
console.log('Lorem ipsum'.includes('lorem'));

// Retorna a repetição da string quantas vezes o usuario quiser
console.log('Lorem ipsum'.repeat(3));

// Retorna se a string começa ou termina com tal letra
console.log('Lorem ipsum'.startsWith('M'));
console.log('Lorem ipsum'.endsWith('M'));

// Corta a string a partir do ponto desejado
console.log('Lorem ipsum'.substring(1, 6));
console.log('Lorem ipsum'.slice(2))

// Transforma toda a string em minusculas ou maiusculas
console.log('Lorem ipsum'.toLowerCase());
console.log('Lorem ipsum'.toUpperCase());

// Retorna uma correspondecia em uma string
console.log('Lorem ipsum'.match('Lorem'))

// É usado para substituir parte de outra string por outra
console.log('Lorem ipsum'.replace('Lorem ipsum', 'Aula pweb2'))

// Procura uma correspondencia em uma string
console.log('Lorem ipsum'.search('Lorem'))

// Remove espaços em branco
console.log('Lorem ipsum'.trim(' '));

// Preenche o inicio de uma string
console.log('Lorem ipsum'.padStart(0))