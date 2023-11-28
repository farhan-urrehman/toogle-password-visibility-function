const inputEl = document.getElementById("inp-el");
const eyeBtn = document.getElementById("eye-btn");

eyeBtn.addEventListener("click", () => {
    console.log('clcikde');

  if (inputEl.type == "password") {
    inputEl.type = "text";
    eyeBtn.src = "eye-icons/eye-open.png"
  } else if (inputEl.type == "text") {
    inputEl.type = "password";
    eyeBtn.src = "eye-icons/eye-close.png"
  }
});


