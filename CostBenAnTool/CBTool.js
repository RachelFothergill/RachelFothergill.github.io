const costBenefitForm = document.getElementById('cost-benefit-form');
const resultSection = document.getElementById('result-section');

costBenefitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const initialCosts = parseFloat(document.getElementById('initial-costs').value);
  const recurringCosts = parseFloat(document.getElementById('recurring-costs').value);
  const opportunityCosts = parseFloat(document.getElementById('opportunity-costs').value) || 0;
  const revenueGains = parseFloat(document.getElementById('revenue-gains').value);
  const costSavings = parseFloat(document.getElementById('cost-savings').value);
  const nonFinancialBenefits = document.getElementById('non-financial-benefits').value;
  const implementationTime = parseFloat(document.getElementById('implementation-time').value);
  const lifespan = parseFloat(document.getElementById('lifespan').value);
  const discountRate = parseFloat(document.getElementById('discount-rate').value) / 100;

  const netPresentValue = calculateNPV
