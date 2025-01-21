# Travelpage
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Discover Your Next Adventure</h1>
    <p>Find the ideal destination based on your preferences.</p>
header {
  text-align: center;
  background-color: #4682b4;
  color: white;
  padding: 20px 0;
}
  </header>
  <main>
    <form id="preferencesForm">
      <label for="weather">Preferred Weather: 
  label {
  display: block;
  margin: 10px 0 5px;
}
        input, select, button {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}</label>
      <select id="weather" name="weather">
        <option value="sunny">Sunny</option>
        <option value="cold">Cold</option>
        <option value="rainy">Rainy</option>
      </select>
      <label for="activities">Favorite Activities:</label>
      <input type="text" id="activities" name="activities" placeholder="e.g., hiking, swimming">
      <label for="budget">Budget:</label>
      <input type="number" id="budget" name="budget" placeholder="Enter your budget in USD">
      <button type="submit">Get Recommendations</button>
    </form>
  main {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </main>
  <footer>
    <p>© 2025 MY-Tee Travel Page</p>
  </footer>
  <script src="scripts.js"></script>
  body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f8ff;
  }
</body>
</html>







button {
  background-color: #4682b4;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #5a9fd6;
}
document.getElementById('preferencesForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const weather = document.getElementById('weather').value;
  const activities = document.getElementById('activities').value;
  const budget = document.getElementById('budget').value;

  // Mock recommendation logic
  const recommendations = [
    {
      name: "Maldives",
      weather: "sunny",
      activities: ["swimming", "relaxing"],
      budget: 2000,
      description: "Tropical paradise known for its beaches and clear waters.",
      image: "maldives.jpg",
    },
    {
      name: "Iceland",
      weather: "cold",
      activities: ["hiking", "aurora"],
      budget: 1500,
      description: "Explore glaciers, hot springs, and the northern lights.",
      image: "iceland.jpg",
    },
  ];

  // Filter recommendations
  const filtered = recommendations.filter((dest) => 
    dest.weather === weather &&
    dest.activities.some((act) => activities.toLowerCase().includes(act)) &&
    dest.budget <= budget
  );

  // Redirect to recommendations page with data
  sessionStorage.setItem('filteredRecommendations', JSON.stringify(filtered));
  window.location.href = 'recommendations.html';
});
