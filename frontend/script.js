fetch('http://localhost:5000/api/intern')
  .then(response => response.json())
  .then(data => {
    document.getElementById('intern-name').textContent = data.name;
    document.getElementById('referral-code').textContent = data.referralCode;
    document.getElementById('donations').textContent = data.totalDonations;

    const rewards = document.getElementById('rewards-list');
    data.rewards.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      rewards.appendChild(li);
    });
  });
