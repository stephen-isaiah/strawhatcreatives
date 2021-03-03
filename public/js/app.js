const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let service = document.getElementById('service');
let message = document.getElementById('message');

const remainingChars = document.getElementById('remaining-chars');
const MAX_CHARS = 250;
const inputs = [name, email, phone, message]

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let isFormValid = false;
let isValidationOn = false;

message.addEventListener('input', () =>{
  const remaining = MAX_CHARS - message.value.length;
  const color = remaining < MAX_CHARS * 0.1 ? 'red' : null;

  remainingChars.textContent = `${remaining} characters remaining`;
  remainingChars.style.color = color;
});

const resetElm = (elm) =>{
  elm.classList.remove('invalid');
  elm.nextElementSibling.classList.add('hidden');
}

const invalidateElm = (elm) =>{
  elm.classList.add('invalid');
  elm.nextElementSibling.classList.remove('hidden');
}

const validateInputs = ()=>{
  if(!isValidationOn) return;
  isFormValid = true;
  resetElm(name);
  resetElm(email);
  resetElm(phone);

  if (!name.value) {
    isFormValid = false;
    invalidateElm(name);
  }

  if (!isValidEmail(email.value)) {
    isFormValid = false;
    invalidateElm(email);
  }

  if (!isValidPhone(phone.value)) {
    isFormValid = false;
    invalidateElm(phone);
  }

  if (!message.value) {
    isFormValid = false;
    invalidateElm(message);
  }
}


contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  
  if (isFormValid){

    let formData = { 
      name: name.value,
      email: email.value,
      phone_number: phone.value,
      service: service.value,
      message: message.value
    }
  
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://strawhatcreatives.netlify.app/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
      console.log(xhr.responseText);
      if(xhr.responseText == 'success'){
        alert('Email Sent');
        name.value = '';
        email.value = '';
        phone.value = '';
        service.value = '';
        message.value = '';
        isValidationOn = false;
       }else{
         alert('Something went wrong with the server please email stephen.dennis139@gmail.com andI will respond asap. Thank you!');
       }
    }
    remainingChars.textContent = `${MAX_CHARS} characters remaining`
    xhr.send(JSON.stringify(formData));
  }
  

})

inputs.forEach((input)=>{
  input.addEventListener('input', ()=>{
    validateInputs();
  })
})
