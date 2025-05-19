// Simulated data fetch (can be replaced by real API calls later)
const notifications = [
  "Admissions 2025-26 Open",
  "Odd Semester Calendar 2024-25 Released",
  "Management Quota & NRI Admission Info",
  "NIRF DCS Reports 2025 Available"
];

const events = [
  "EduAIthon 2025 – May 16-18",
  "Symposium on AI in Telecom – May 16, 2025",
  "Call for JRF – ISRO RESPOND Project",
  "CSITSS-2024 Registrations Open"
];

function populateList(id, data) {
  const list = document.getElementById(id);
  list.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// Initial render
populateList("notifications-list", notifications);
populateList("events-list", events);

// Optional: Dark mode toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙 Toggle Dark Mode";
darkModeToggle.style.cssText =
  "position: fixed; bottom: 1rem; right: 1rem; padding: 0.5rem 1rem; background-color: #003366; color: white; border: none; border-radius: 5px; cursor: pointer; z-index: 999;";
document.body.appendChild(darkModeToggle);

let darkMode = false;

darkModeToggle.addEventListener("click", () => {
  document.body.style.backgroundColor = darkMode ? "#f5f7fa" : "#111";
  document.body.style.color = darkMode ? "#333" : "#eee";
  document.querySelectorAll("section").forEach(sec => {
    sec.style.backgroundColor = darkMode ? "white" : "#222";
    sec.style.color = darkMode ? "#333" : "#eee";
  });
  darkMode = !darkMode;
});

// Dev console welcome
console.log("%cWelcome to the RVCE Clone Site!", "color: #003366; font-size: 1.2rem; font-weight: bold");
console.log("Built by Varun 🚀");
