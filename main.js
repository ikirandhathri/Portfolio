

// Dark mode toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkmode-toggle');
  toggle.addEventListener('click', function () {
    document.body.classList.toggle('darkmode');
    toggle.textContent = document.body.classList.contains('darkmode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
});
