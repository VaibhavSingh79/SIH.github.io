const bg = document.getElementById('bg');
const n = 400;

for (let i = 0; i<n; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    bg.append(box)
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    let i = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter,index) => {
            if(index < i) {
                return event.target.dataset.value[index];
            }
            
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

    if (i >= 9) clearInterval(interval);
    
    i += 1/5;

    }, 50);
};

const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");

loginButton.addEventListener("click", function() {
    const loginEmail = document.getElementById("lemail").value;
    const loginPassword = document.getElementById("lpassword").value;

    console.log("Login Email:", loginEmail);
    console.log("Login Password:", loginPassword);
});

registerButton.addEventListener("click", function() {
    const registerName = document.getElementById("name").value;
    const registerEmail = document.getElementById("email").value;
    const registerPassword = document.getElementById("password").value;

    console.log("Register Name:", registerName);
    console.log("Register Email:", registerEmail);
    console.log("Register Password:", registerPassword);
});
