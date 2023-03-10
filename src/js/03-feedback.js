const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData ={};

form.addEventListener('submit', FormSubmit);
form.addEventListener('input', _throttle(onFormInput, 500));

formLoad();

function FormSubmit(event) {
  event.preventDefault();
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log("Отправили",savedData);
  
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(event) {
  formData[event.target.name]=event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function formLoad() {
  const formLoad = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!formLoad) { 
    return ;
  };
  form.email.value = formLoad.email || '';
  form.message.value = formLoad.message || '';
  formData.email =form.email.value ;
  formData.message =form.message.value ;   

}