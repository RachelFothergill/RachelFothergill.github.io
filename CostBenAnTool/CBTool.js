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
  // Subtract initial costs from present value and set as the initial present value
  let presentValue = -initialCosts;
  // Loop through each month of the lifespan
  for (let i = 1; i <= lifespan * 12; i++) {
    // Calculate the cash flow for the current month by adding revenue gains and cost savings
    let cashFlow = costSavings + revenueGains;
    // If the current month is before or during the implementation time, subtract recurring costs and opportunity costs from cash flow
    if (i <= implementationTime) {
      cashFlow -= recurringCosts + opportunityCosts;
    } else { // Otherwise, only subtract recurring costs
      cashFlow -= recurringCosts;
    }
    // Calculate the discounted cash flow for the current month and add it to the present value
    let discountedCashFlow = cashFlow / Math.pow(1 + discountRate, i / 12);
    presentValue += discountedCashFlow;
  }
  // Return the net present value with 2 decimal places
  return presentValue.toFixed(2);
}

// Display the net present value on the page
function displayResult(npv, nonFinancialBenefits) {
  // Create a string that contains the calculated NPV
  let resultText = `<p>The calculated NPV is $${npv}.</p>`;
  // If non-financial benefits were provided, add them to the result string
  if (nonFinancialBenefits) {
    resultText += `<p>Non-financial benefits: ${nonFinancialBenefits}</p>`;
  }
  // Set the HTML content of the result section element to the result string
  resultSection.innerHTML = resultText;
}

