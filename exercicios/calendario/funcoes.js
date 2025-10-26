let primeiroDia = 0; // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
let diasNoMes = 31;

let semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
console.log(semana.join(' ')); // cabeçalho

let linha = '';
// Espaços antes do primeiro dia
for (let i = 0; i < primeiroDia; i++) {
  linha += '    ';
}

// Preenche os dias do mês
for (let dia = 1; dia <= diasNoMes; dia++) {
  linha += dia.toString().padStart(3, ' ') + ' ';
  
  // Quebra de linha a cada sábado
  if ((dia + primeiroDia) % 7 === 0) {
    console.log(linha);
    linha = '';
  }
}

// Imprime a última linha (se sobrar)
if (linha !== '') console.log(linha);