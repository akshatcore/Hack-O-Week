const loadBtn = document.getElementById('loadBtn');
const userInfo = document.getElementById('userInfo');

function saveUser(user) {
  localStorage.setItem('lastUser', JSON.stringify(user));
}

function renderUser(user) {
  if (!userInfo) return;
  userInfo.innerHTML = `
    <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Country:</strong> ${user.location.country}</p>
  `;
}

async function fetchRandomUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    saveUser(user);
    renderUser(user);
  } catch (error) {
    if (userInfo) {
      userInfo.textContent = 'Unable to load user data.';
    }
    console.error(error);
  }
}

function loadSavedUser() {
  const saved = localStorage.getItem('lastUser');
  if (saved) {
    renderUser(JSON.parse(saved));
  }
}

if (loadBtn) {
  loadBtn.addEventListener('click', fetchRandomUser);
}

loadSavedUser();
