import 'bootstrap';
import { investments } from './src/js/data';
import { InvestmentCard } from './src/js/components/investmentCard.js';
 
import 'bootstrap/dist/css/bootstrap.css';
 
const investmentsGrid = document.querySelector('.investments');
 
investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment))
  .join('');
 