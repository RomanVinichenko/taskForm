const form = document.getElementById('form__left');

const name = document.getElementById('name');
const pass = document.getElementById('pass');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const passValue = pass.value.trim();

  if (nameValue === '') {
    setErrorFor(name, 'Username cannot be blank');
  } else {
    setSuccessFor(name);
  }

  if (passValue === '') {
    setErrorFor(pass, 'Password cannot be blank');
  } else {
    setSuccessFor(pass);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.small');
  small.innerText = message;

  formControl.className = 'form__control-left error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'form__control-left success';
}

const formR = document.getElementById('form__right');

const email = document.getElementById('email');
const user = document.getElementById('user');
const password = document.getElementById('password');

formR.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputsR();
});

function checkInputsR() {
  const emailValue = email.value.trim();
  const userValue = user.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '') {
    setErrorForR(email, 'Email cannot be blank');
  } else {
    setSuccessForR(email);
  }

  if (userValue === '') {
    setErrorForR(user, 'User Name cannot be blank');
  } else {
    setSuccessForR(user);
  }
  if (passwordValue === '') {
    setErrorForR(password, 'Password cannot be blank');
  } else {
    setSuccessForR(password);
  }
}

function setErrorForR(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.small');
  small.innerText = message;

  formControl.className = 'form__control-right error';
}

function setSuccessForR(input) {
  const formControl = input.parentElement;

  formControl.className = 'form__control-right success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase(),
  );
}
