document.getElementById('cardForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const cardNumber = document.getElementById('cardNumber').value;
  const cardHolder = document.getElementById('cardHolder').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;

  const output = `
      <h3>Информация о карте:</h3>
      <p><strong>Номер карты:</strong> ${cardNumber}</p>
      <p><strong>Владелец карты:</strong> ${cardHolder}</p>
      <p><strong>Срок действия:</strong> ${expiryDate}</p>
      <p><strong>CVV:</strong> ${cvv}</p>
    `;

  document.getElementById('output').innerHTML = output;
});
