/* Modal đăng nhập */
const buyBtn = document.querySelector('.js-user')
const modal = document.querySelector('.js-modal')
const modalContainerS = document.querySelectorAll('.js-modal-container')
const links = document.querySelectorAll('.js-link')

function showBuyTicket(){
    modal.classList.add('open')
}

function hideBuyTicket(){
    modal.classList.remove('open')
}


buyBtn.addEventListener('click', showBuyTicket)
modal.addEventListener('click', hideBuyTicket)
for(const modalContainer of modalContainerS){
    modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})
}


/*Lướt trái lướt phải của Đăng Ký và Đăng Nhập*/
var x = document.getElementById("login")
var y = document.getElementById("register")
function login1(){
    x.style.display = "block";
    y.style.display = "none";
}
function register1(){
    x.style.display = "none";
    y.style.display = "block";
}


/*Chức năng đăng nhập*/
function login(event) {
event.preventDefault();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const loginData = {
    email,
    password,
};
fetch("http://localhost:8000/api/auth/signin", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
})
.then((response) => response.json())
.then(data => {
    //Xử lý logic nếu cần!
    alert(data.message);
    console.log(data);
    
})
.catch(error => console.log(error.message));
}

const formLogin = document.getElementById("login-form");
if(formLogin){
    formLogin.addEventListener("submit", login);
}
/*Chức năng đăng ký*/
function register(event) {
event.preventDefault();
const userName = document.getElementById("userName").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;
const registerData = {
userName,
email,
password,
confirmPassword,
};
fetch("http://localhost:8000/api/auth/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
})
.then((response) => response.json())
.then(data => {
    //Xử lý logic nếu cần!
    alert(data.message);
    console.log(data);
    
})
.catch(error => console.log(error.message));
}

const formRegister = document.getElementById("register-form");
if(formRegister){
    formRegister.addEventListener("submit", register);
}


/*Hàm thay đổi tiêu đề khi Responsive*/
function myMenuFunction(){
    var i = document.getElementById("nav");
    if(i.className === "nav-menu"){
        i.className += " responsive";
    }
    else{
        i.className = "nav-menu";
    }
}
/* Cuộn lên cuộn xuống */
window.onscroll = function() {changeHeader()};
function changeHeader() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "#353535";
    document.getElementById("header").style.transition = ".5s";
    
} else {
    document.getElementById("header").style.backgroundColor = "transparent";
    }
}

function myMenuFunction(){
    var i = document.getElementById("nav");
    if(i.className === "nav-menu"){
        i.className += " responsive";
    }
    else{
        i.className = "nav-menu";
    }
}