const subscribeBtn = document.querySelector(".subscribe-button");
const secondPage = document.querySelector(".second-page");
const firstPage = document.querySelector(".container");
const emailInput = document.querySelector(".email-input");
const emailLabel = document.querySelector(".email-label");
const subMessage = document.querySelector(".summary-message");
const mainPhoto = document.querySelector(".main-photo");

if (window.innerWidth >= 1439) {
  mainPhoto.src = "/assets/images/illustration-sign-up-desktop.svg";
} else {
  mainPhoto.src = "assets/images/illustration-sign-up-mobile.svg";
}

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value;
  if (emailValidation(email)) {
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
    subMessage.innerHTML = `A confirmation email has been sent to
    <strong>${email}</strong>.
    Please open it and click the button inside to confirm your subscription.`;
  } else {
    emailInput.classList.add("invalid-email");
    emailLabel.classList.add("invalid-label");
    emailLabel.textContent = "Enter valid email";
  }
});

function emailValidation(email) {
  const validEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return validEmail.test(email);
}
