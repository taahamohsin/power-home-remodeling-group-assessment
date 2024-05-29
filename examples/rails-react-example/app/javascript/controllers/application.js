import { Application } from "@hotwired/stimulus";

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };


// Simple JavaScript to handle tab switching
function showTab(tabId) {
  // Hide all tab contents
  const containers = [
    "dashboard-container",
    "products-container",
    "in-progress-container",
    "settings-container"
  ];
  containers.forEach(id => {
    document.getElementById(id).style.display = "none";
  });

  // Show the selected tab content
  document.getElementById(tabId).style.display = "block";

  // Update the 'active' class in the navigation links
  const navLinks = document.querySelectorAll(".pb_nav_link");
  navLinks.forEach(link => link.classList.remove("active"));
  const clickedLink = document.querySelector(
    `.pb_nav_link[data-path="${tabId.replace("-container", "")}"]`
  );
  if (clickedLink) {
    clickedLink.classList.add("active"); // Add 'active' class to the clicked link
  }
}

// Show the correct tab on initial page load
document.addEventListener("turbo:load", () => {
  const currentPath = window.location.pathname;
  const tabIdToShow = currentPath.substring(1); // Remove leading slash
  showTab(tabIdToShow + "-container");
});
