document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  const name = document.getElementById('name').value;
  const registrationNumber = document.getElementById('registrationNumber').value;
  const branch = document.getElementById('branch').value;

  const data = {
      name: name,
      registrationNumber: registrationNumber,
      branch: branch
  };

  fetch('YOUR_API_GATEWAY_ENDPOINT', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert('Registration successful!');
  })
  .catch((error) => {
      console.error('Error:', error);
      alert('Registration failed.');
  });
});
