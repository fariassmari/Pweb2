import flags from './model/flags.js';

const main = document.querySelector('main');
let htmlConteudo = '';

for (const flag of flags) {
  htmlConteudo += criarFlag(flag);
}

main.innerHTML = htmlConteudo;

function criarFlag(flag) {
  return `
    <div class="flag col-2 my-2 text-center">
      <img src="${flag.image}" alt="${flag.name}" class="mx-auto w-32 h-20 object-cover">
      <p class="mt-2 font-semibold">${flag.name}</p>
    </div>
  `;
}