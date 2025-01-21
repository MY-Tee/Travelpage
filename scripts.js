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
