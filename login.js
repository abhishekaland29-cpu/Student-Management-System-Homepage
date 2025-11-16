const containers = document.getElementById('containers');
const registerBtn = document.querySelector('.toggle-right .hidden');  // Select the button in the right toggle panel
const loginBtn = document.querySelector('.toggle-left .hidden');      // Select the button in the left toggle panel
// Add "active" class when register button is clicked (switches to admin form)
registerBtn.addEventListener('click', () => {
  containers.classList.add("active");
});
// Remove "active" class when login button is clicked (switches back to student form)
loginBtn.addEventListener('click', () => {
  containers.classList.remove("active");
});