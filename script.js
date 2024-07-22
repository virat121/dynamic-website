document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const college = document.getElementById('college').value;
  const teamName = document.getElementById('teamName').value;
  const teamSize = document.getElementById('teamSize').value;
  const hackathon = document.getElementById('hackathon').value;

  // Display form values for demonstration purposes (you can send these values to a server)
  alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCollege: ${college}\nTeam Name: ${teamName}\nTeam Size: ${teamSize}\nHackathon: ${hackathon}`);

  // Reset the form
  document.getElementById('registrationForm').reset();
});
