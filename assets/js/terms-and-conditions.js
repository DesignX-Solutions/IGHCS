// Load user session and show correct UI
document.addEventListener("DOMContentLoaded", function () {
    const user = sessionStorage.getItem('username');

    if (user) {
        document.getElementById('auth-section').style.display = "none"; // Hide Login/Register
        document.getElementById('user-menu').style.display = "block"; // Show User Icon
        document.getElementById('username-display').innerHTML = `<i class="fa-solid fa-user"></i> ${user}`;
    } else {
        document.getElementById('auth-section').style.display = "flex"; // Show Login/Register
        document.getElementById('user-menu').style.display = "none"; // Hide User Icon
    }
});

function toggleDropdown() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

function logout() {
    sessionStorage.removeItem('username');
    window.location.href = 'index.html';
}

// Close dropdown when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.user-icon')) {
        let dropdown = document.getElementById("dropdown-menu");
        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }
    }
}

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}


function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
