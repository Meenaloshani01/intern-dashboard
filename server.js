const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());

// Dummy data
const internData = {
  name: "Meena Loshani",
  referralCode: "meena2025",
  totalDonations: 4500,
  rewards: ["Bronze Badge", "Custom T-shirt", "Early Access"],
};

const leaderboard = [
  { name: "Meena Loshani", donations: 4500 },
  { name: "Ravi", donations: 4200 },
  { name: "Priya", donations: 3900 },
];

// Routes
app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

// Default route for root path
app.get('/', (req, res) => {
  res.send('Intern Dashboard Backend is running ✅');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
