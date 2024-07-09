let cloths = document.getElementById("cloths");
let skincares = document.getElementById("skincares");
let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let blogs = document.getElementById("blogs");

cloths.addEventListener("click", function() {
  cloths.style.color = "red";
  skincares.style.color = "coral";
  reviews.style.color = "coral";
  contacts.style.color = "coral";
  blogs.style.color = "coral";
})

skincares.addEventListener("click", function() {
  cloths.style.color = "coral";
  skincares.style.color = "red";
  reviews.style.color = "coral";
  contacts.style.color = "coral";
  blogs.style.color = "coral";
})

reviews.addEventListener("click", function() {
  cloths.style.color = "coral";
  skincares.style.color = "coral";
  reviews.style.color = "red";
  contacts.style.color = "coral";
  blogs.style.color = "coral";
})

contacts.addEventListener("click", function() {
  cloths.style.color = "coral";
  skincares.style.color = "coral";
  reviews.style.color = "coral";
  contacts.style.color = "red";
  blogs.style.color = "coral";
})

blogs.addEventListener("click", function() {
  cloths.style.color = "coral";
  skincares.style.color = "coral";
  reviews.style.color = "coral";
  contacts.style.color = "coral";
  blogs.style.color = "red";
})

let login = document.getElementById("login");

login.addEventListener("click", function(){
  document.querySelector(".loginPage").style.display = "block";
})

let loged = document.getElementById("loged");

loged.addEventListener("click", function(){
  let email = document.getElementById("mail");
  let pass = document.getElementById("pass");

  if(email.value == "" || pass.value == ""){
    alert("Please Enter Email and Password");
  }else{
    alert("You Logged In");
    document.querySelector(".loginPage").style.display = "none";
  }
})

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
  let name = document.getElementById("name");
  let password = document.getElementById("pass");

  if(name.value == "" || password.value == ""){
    alert("Thanks For Connecting");
  }else{
    alert("Please Enter Name and Password");
  }
})
