!function(){var e="feedback-form-state",t=document.querySelector(".feedback-form"),a={};t.addEventListener("submit",(function(t){t.preventDefault();var r=JSON.parse(localStorage.getItem(e));console.log("Отправили",r),t.currentTarget.reset(),localStorage.removeItem(e),a={}})),t.addEventListener("input",_throttle((function(t){a[t.target.name]=t.target.value,localStorage.setItem(e,JSON.stringify(a))}),500)),function(){var r=JSON.parse(localStorage.getItem(e));if(!r)return;t.email.value=r.email||"",t.message.value=r.message||"",a.email=t.email.value,a.message=t.message.value}()}();
//# sourceMappingURL=03-feedback.e2a01b6e.js.map
