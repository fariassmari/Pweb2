// Exibe mensagens no console do navegador
window.console.log('Running JS in browser');

// Exibe largura da pagina
const width = window.innerWidth;
console.log(`Width: ${width}px`);

// Exibe altura da pagina
const height = window.innerHeight;
console.log(`Height: ${height}px`);

// Exibe alertas na tela do usuário
window.alert('Hello World!');

// Exibe uma caixa de confirmação na tela do usuário
const response = window.confirm('Are you sure?');
window.confirm(response);

// Exibe uma caixa de prompt na tela do usuário
const name = window.prompt('what is your name?');
console.log(name);

// Abre uma nova janela
//const windowRef = window.open("https://www.google.com");

// Fecha a janela atual
//window.close();