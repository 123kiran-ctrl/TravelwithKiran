document.getElementById('budgetForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const destination = document.getElementById('destination').value;
    const days = parseInt(document.getElementById('days').value);
    const style = document.getElementById('style').value;
    const flight = parseFloat(document.getElementById('flight').value);
    const accommodation = parseFloat(document.getElementById('accommodation').value) * days;
    const food = parseFloat(document.getElementById('food').value) * days;
    const activities = parseFloat(document.getElementById('activities').value) * days;
    const transport = parseFloat(document.getElementById('transport').value);
    const misc = parseFloat(document.getElementById('misc').value);
  
    const total = flight + accommodation + food + activities + transport + misc;
  
    document.getElementById('budgetResult').innerHTML = `
      <h3>Estimated Budget for ${destination}</h3>
      <p><strong>Travel Style:</strong> ${style.charAt(0).toUpperCase() + style.slice(1)}</p>
      <p>Flight: $${flight.toFixed(2)}</p>
      <p>Accommodation: $${accommodation.toFixed(2)}</p>
      <p>Food: $${food.toFixed(2)}</p>
      <p>Activities: $${activities.toFixed(2)}</p>
      <p>Transport: $${transport.toFixed(2)}</p>
      <p>Miscellaneous: $${misc.toFixed(2)}</p>
      <hr>
      <strong>Total Trip Cost: $${total.toFixed(2)}</strong>
    `;
  });
  