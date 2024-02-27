const dollarAmount = document.getElementById('dollar-amount');
const getRatesButton = document.getElementById('get-rates');
const currencyTable = document.getElementById('currency-table');

getRatesButton.addEventListener('click', async () => {
  const selectedAmount = dollarAmount.value;
  const rates = await getCurrencyRates(selectedAmount);
  currencyTable.innerHTML = createTable(rates);
});

async function getCurrencyRates(amount) {
  const response = await fetch('https://habr.com/ru/articles/537784/');
  const data = await response.json();
  const rates = {
    USD: amount,
    THB: amount * data.rates.THB,
    RUB: amount * data.rates.RUB,
    BYN: amount * data.rates.BYN,
  };
  return rates;
}

function createTable(rates) {
  const table = `
    <table>
      <thead>
        <tr>
          <th>Валюта</th>
          <th>Курс</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>USD</td>
          <td>${rates.USD}</td>
        </tr>
        <tr>
          <td>THB</td>
          <td>${rates.THB}</td>
        </tr>
        <tr>
          <td>RUB</td>
          <td>${rates.RUB}</td>
        </tr>
        <tr>
          <td>BYN</td>
          <td>${rates.BYN}</td>
        </tr>
      </tbody>
    </table>
  `;
  return table;
}