// Select the form and result section elements from the HTML
const form = document.getElementById("cost-benefit-form");
const resultSection = document.getElementById("result-section");

// Attach an event listener to the form for when it's submitted
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input values from the form
  const initialCosts = parseFloat(document.getElementById("initial-costs").value);
  const recurringCosts = parseFloat(document.getElementById("recurring-costs").value);
  const opportunityCosts = parseFloat(document.getElementById("opportunity-costs").value) || 0;
  const revenueGains = parseFloat(document.getElementById("revenue-gains").value);
  const costSavings = parseFloat(document.getElementById("cost-savings").value);
  const nonFinancialBenefits = document.getElementById("non-financial-benefits").value;
  const implementationTime = parseInt(document.getElementById("implementation-time").value);
  const lifespan = parseInt(document.getElementById("lifespan").value);
  const discountRate = parseFloat(document.getElementById("discount-rate").value) / 100;

  // Calculate the net present value
  const npv = calculateNPV(initialCosts, recurringCosts, opportunityCosts, revenueGains, costSavings, implementationTime, lifespan, discountRate);

  // Display the result on the page
  displayResult(npv, nonFinancialBenefits);
});

// Calculate the net present value based on the input values
function calculateNPV(initialCosts, recurringCosts, opportunityCosts, revenueGains, costSavings, implementationTime, lifespan, discountRate) {
  let presentValue = -initialCosts; // Subtract initial costs from present value
  for (let i = 1; i <= lifespan * 12; i++) {
    let cashFlow = costSavings + revenueGains;
    if (i <= implementationTime) {
      cashFlow -= recurringCosts + opportunityCosts;
    } else {
      cashFlow -= recurringCosts;
    }
    let discountedCashFlow = cashFlow / Math.pow(1 + discountRate, i / 12);
    presentValue += discountedCashFlow;
  }
  return presentValue.toFixed(2);
}

// Display the net present value on the page
function displayResult(npv, nonFinancialBenefits) {
  let resultText = `<p>The calculated NPV is $${npv}.</p>`;
  if (nonFinancialBenefits) {
    resultText += `<p>Non-financial benefits: ${nonFinancialBenefits}</p>`;
  }
  resultSection.innerHTML = resultText;
}
