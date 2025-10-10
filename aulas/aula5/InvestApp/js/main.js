import { investments } from "./data.js";
import { investmentCard } from "../js/components/investmentCard.js";

// Para cad elemento investments, chama a função investmentCard cira uma funcao
investments.map((investment) => investmentCard(investment)); 
// allCards <=> [card1, card2, card3]
    
const div = document.querySelector('#investments-cards');
div.innerHTML = allCards.join('');

