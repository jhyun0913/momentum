const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const hidden_classname = "hidden";
const username_key = "username";

function onLoginSubmit(event){ 
    event.preventDefault();
    loginForm.classList.add(hidden_classname);
    const username = loginInput.value;
    localStorage.setItem(username_key,username);
    painGreetings(username);
}

function painGreetings(username){
    greeting.innerText=`hello ${username}`;
    greeting.classList.remove(hidden_classname);
}

const savedUsername = localStorage.getItem(username_key);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(hidden_classname);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    //show the greeting
    painGreetings(savedUsername);
}