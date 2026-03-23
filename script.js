function validateSignup(event){
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  let message = document.getElementById("message");

  // BASIC VALIDATION FIRST
  if(username === "" || email === "" || password === "" || confirm === ""){
    message.innerHTML = "All fields are required";
    return;
  }

  if(password !== confirm){
    message.innerHTML = "Passwords do not match";
    return;
  }

  // ⭐ LOGIC VALIDATION
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let userExists = users.find(user => user.username === username);

  if(userExists){
    message.innerHTML = "Username already exists";
    return;
  }

  // SAVE ACCOUNT
  users.push({username, email, password});
  localStorage.setItem("users", JSON.stringify(users));

  message.innerHTML = "Account Created Successfully ✅";

  setTimeout(()=>{
    window.location.href="login.html";
  },1500);
}

function validateLogin(event){
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let error = document.getElementById("error");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let validUser = users.find(user => 
      user.username === username && user.password === password
  );

  if(validUser){
    error.style.color = "#00ffcc";
    error.innerHTML = "Login Successful ✅";

    setTimeout(()=>{
      window.location.href="profile.html";
    },1000);

  } else {
    error.style.color = "#ff4d4d";
    error.innerHTML = "Invalid Username or Password";
  }
}
