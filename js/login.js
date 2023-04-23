
const storeCredentials = () => {
    this.localStorage.setItem('defaultuser', 'admin');
    this.localStorage.setItem('defaultpassword', 'admin');
}

storeCredentials();

let username = document.getElementById("username"),
password = document.getElementById("password"),
form = document.getElementById("form"),
error = document.getElementById("credentials"),
loginButton = document.querySelector('#login-button');
console.log(loginButton);

const defaultUser = this.localStorage.getItem('defaultuser'),
defaultPassword = this.localStorage.getItem('defaultpassword');

    console.log(`${defaultUser}    ${defaultPassword}`);    

const clickForLogin = (event) => {
    event.preventDefault();

    console.log(defaultUser, defaultPassword);
    if (defaultUser === username.value && defaultPassword === password.value) {
        location.replace("./resume.html");
    }
    else
    error.innerText = 'Invalid credentials !!!'
}

loginButton.addEventListener("click", clickForLogin);

  
