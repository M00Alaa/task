let welcome = document.getElementsByClassName("welcome");
let signup = document.getElementsByClassName("signup");
let succeed = document.getElementsByClassName("succeed");

const usernameInput = document.getElementById("usernameInput");
const userEmailInput = document.getElementById("userEmailInput");
const userPasswordInput = document.getElementById("userPasswordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");

let getStarted = document.getElementById("get-started");
let createAccount = document.getElementById("create-account");

getStarted.addEventListener("click", () => {
  $(".welcome").addClass("d-none");
  $(".signup").removeClass("d-none");
});
createAccount.addEventListener("click", () => {
  signupFunc();
});

let userInfo = [];

function signupFunc() {
  userInputsValidation();

  if (userInputsValidation() == true) {
    let user = {
      username: usernameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
      password_confirmation: confirmPasswordInput.value,
    };
    userInfo.push(user);

    cheackSignup(userInfo);
  } else {
    const tryAgainMsg = document.getElementById("tryAgainMsg");
    tryAgainMsg.classList.replace("d-none", "d-block");
  }
}

async function cheackSignup(userData) {
  return await fetch("https://goldblv.com/api/hiring/tasks/register", {
    method: "POST",
    typeof: "application/json",
    body: JSON.stringify(userData),
  }).then((res) => {
    if (res.status == "200") {
      $(".signup").addClass("d-none");
      $(".succeed").removeClass("d-none");
    }
  });
}

function usernameValidation() {
  const usernameAlert = document.getElementById("usernameAlert");

  let regex = /^[A-Z]{1,}[A-Za-z]{5,15}$/;
  if (regex.test(usernameInput.value) == true && usernameInput.value != "") {
    usernameInput.classList.add("is-valid");
    usernameInput.classList.remove("is-invalid");
    usernameAlert.classList.replace("d-block", "d-none");

    return true;
  } else {
    usernameInput.classList.add("is-invalid");
    usernameInput.classList.remove("is-valid");
    usernameAlert.classList.replace("d-none", "d-block");

    return false;
  }
}
function confirmPasswordValidation() {
  const confirmPasswordAlert = document.getElementById("confirmPasswordAlert");

  if (
    confirmPasswordInput.value == userPasswordInput.value &&
    confirmPasswordInput.value != ""
  ) {
    confirmPasswordInput.classList.add("is-valid");
    confirmPasswordInput.classList.remove("is-invalid");
    confirmPasswordAlert.classList.replace("d-block", "d-none");

    return true;
  } else {
    confirmPasswordInput.classList.add("is-invalid");
    confirmPasswordInput.classList.remove("is-valid");
    confirmPasswordAlert.classList.replace("d-none", "d-block");

    return false;
  }
}
function userPasswordValidation() {
  let regex = /^.{8,15}$/;
  const userPasswordAlert = document.getElementById("userPasswordAlert");

  if (
    regex.test(userPasswordInput.value) == true &&
    userPasswordInput.value != ""
  ) {
    userPasswordInput.classList.add("is-valid");
    userPasswordInput.classList.remove("is-invalid");
    userPasswordAlert.classList.replace("d-block", "d-none");

    return true;
  } else {
    userPasswordInput.classList.add("is-invalid");
    userPasswordInput.classList.remove("is-valid");
    userPasswordAlert.classList.replace("d-none", "d-block");

    return false;
  }
}
function userEmailValidation() {
  const userEmailAlert = document.getElementById("userEmailAlert");

  let regex = /@[a-z]{5,10}(\.com)$/;
  if (regex.test(userEmailInput.value) == true && userEmailInput.value != "") {
    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    userEmailAlert.classList.replace("d-block", "d-none");

    return true;
  } else {
    userEmailInput.classList.add("is-invalid");
    userEmailInput.classList.remove("is-valid");
    userEmailAlert.classList.replace("d-none", "d-block");

    return false;
  }
}
function userInputsValidation() {
  usernameValidation();
  userEmailValidation();
  userPasswordValidation();
  confirmPasswordValidation();

  if (
    usernameValidation() == true &&
    userEmailValidation() == true &&
    userPasswordValidation() == true &&
    confirmPasswordValidation() == true
  ) {
    return true;
  } else {
    return false;
  }
}
