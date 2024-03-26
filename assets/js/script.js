'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = form.querySelectorAll("[data-form-input]");
const formBtn = form.querySelector("[data-form-btn]");
const whatsappBtn = document.querySelector(".whatsapp-btn"); // Optional

// Add event listener to the form button
formBtn.addEventListener("click", function (event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Check form validation
  if (form.checkValidity()) {
    // Get form data
    const formData = new FormData(form);
    const name = formData.get("fullname"); // Corrected field name
    const email = formData.get("email");
    const message = formData.get("message");

    // Construct WhatsApp message
    const phoneNumber = "+919361191640"; // Replace with your phone number
    const encodedMessage = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");

    // Reset the form (optional)
    form.reset();
  } else {
    // Display an error message or highlight invalid fields
    alert("Please fill out all required fields correctly.");
  }
});

// Add event listener to all form input fields
formInputs.forEach(input => {
  input.addEventListener("input", function () {
    formBtn.disabled = !form.checkValidity();
  });
});

// // Add event listener to all form input fields (optional)
// if (formInputs.length > 0) {
//   for (let i = 0; i < formInputs.length; i++) {
//     formInputs[i].addEventListener("input", function () {
//       if (form.checkValidity()) {
//         formBtn.removeAttribute("disabled");
//       } else {
//         formBtn.setAttribute("disabled", "");
//       }
//     });
//   }
// }

// // WhatsApp button event listener (optional)
// if (whatsappBtn) {
//   whatsappBtn.addEventListener("click", function () {
//     // Prompt user for name and email (optional, adjust as needed)
//     const name = prompt("Enter your name:");
//     const email = prompt("Enter your email:");

//     // Construct a custom WhatsApp message
//     const message = `Name: ${name} \nEmail: ${email} \nMessage: `; // Combine data

//     // Create WhatsApp link with pre-formatted message
//     const phoneNumber = "+919361191640"; // Replace with your phone number
//     const encodedMessage = encodeURIComponent(message);
//     const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     // Open the link in a new tab/window
//     window.open(url, "_blank").focus();
//   });
// }




// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}