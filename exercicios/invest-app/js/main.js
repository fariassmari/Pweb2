import { investments } from '../js/data.js';
import { InvestmentCard } from '../js/components/InvestmentCard.js';
 
const investmentsGrid = document.querySelector('.investments');
 
investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment))
  .join('');
 