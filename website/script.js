const users = document.querySelectorAll(".user-list li");

users.forEach(user => {
    user.addEventListener("click", () => {
        alert(`You selected ${user.textContent.trim()}`);
    });
});
