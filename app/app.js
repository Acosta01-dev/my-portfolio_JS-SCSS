let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//////////////////////////////BURGUER MENU//////////////////////////////////////////

// Get the burger button element and mobile navigation element
const burguer_btn = document.getElementsByClassName('burguer_menu')[0];
const mobile_nav = document.getElementById('mobile-nav');

// Add a click event listener to the burger button
burguer_btn.addEventListener('click', function () {
  // Get the current transform value of the burger button
  let transformValue = burguer_btn.style.transform;

  // Toggle the transform value between "rotate(0deg)" and "rotate(90deg)"
  if (transformValue === "rotate(90deg)") {
    burguer_btn.style.transform = "rotate(0deg)";
  } else {
    burguer_btn.style.transform = "rotate(90deg)";
  }

  // Toggle the max-height value of the mobile navigation element
  if (mobile_nav.style.maxHeight) {
    mobile_nav.style.maxHeight = null;
  } else {
    mobile_nav.style.maxHeight = mobile_nav.scrollHeight + "px";
  }
});

//////////////////////////////TABS//////////////////////////////////////////

// Get all the tabs sections
const tabsSections = document.querySelectorAll('.tabs-section');

// Iterate over each tabs section
tabsSections.forEach(section => {
  // Get the tabs and tab contents within the current section
  const tabs = section.querySelectorAll('.tabs_button');
  const tabContents = section.querySelectorAll('.tab-content-js');

  // Add click event listener to each tab
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Get the data-tab attribute of the tab
      const tabId = tab.getAttribute('data-tab');

      // Remove the 'tab-active' class from all tabs and 'tab-content-active' class from all tab contents in the current section
      tabs.forEach(tab => tab.classList.remove('tab-active'));
      tabContents.forEach(content => content.classList.remove('tab-content-active'));

      // Add the 'tab-active' class to the clicked tab and 'tab-content-active' class to the corresponding tab content in the current section
      tab.classList.add('tab-active');
      section.querySelector(`#${tabId}`).classList.add('tab-content-active');
    });
  });
});

///////////////////////////////TYPING EFFECT/////////////////////////////////////////

// Get the elements from the DOM
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

// Array of texts to be typed
const textArray = ["Frontend", "Backend", "Fullstack"];

// Delay settings
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text

let textArrayIndex = 0; // Index of the current text in the array
let charIndex = 0; // Index of the current character in the current text

// Function for typing effect
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    // Check if the cursor span does not have the "typing" class and add it
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");

    // Append the next character to the typed text
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);

    charIndex++; // Increment the character index

    // Call the type function again after a delay
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing"); // Remove the "typing" class from the cursor span
    setTimeout(erase, newTextDelay); // Call the erase function after a delay
  }
}

// Function for erasing effect
function erase() {
  if (charIndex > 0) {
    // Check if the cursor span does not have the "typing" class and add it
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");

    // Remove the last character from the typed text
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);

    charIndex--; // Decrement the character index

    // Call the erase function again after a delay
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing"); // Remove the "typing" class from the cursor span
    textArrayIndex++; // Increment the text index

    // Reset the text index if it exceeds the length of the array
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;

    setTimeout(type, typingDelay + 1100); // Call the type function after a delay
  }
}

// Event listener to start the effect when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});






const checkboxes = document.querySelectorAll('.category-selector input[type="checkbox"]');
const categoryContents = document.querySelectorAll('.category-content');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const selectedCategories = Array.from(document.querySelectorAll('.category-selector input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);

    categoryContents.forEach(content => {
      content.style.display = 'none';
    });

    selectedCategories.forEach(category => {
      const selectedContent = document.getElementById(`content-${category}`);
      selectedContent.style.display = 'block';
    });
  });
});

///////////////////////////////EMAIL JS/////////////////////////////////////////

const btn = document.getElementById('button');
document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  // Specify the email service and template IDs
  const serviceID = 'default_service';
  const templateID = 'template_69w3aa3';

  // Send the form using emailjs
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // On success, update button value and show success alert
      btn.value = 'Sent!';
      alert('Sent!');
    }, (err) => {
      // On error, update button value and show error alert
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

////////////////////////////////////////////////////////////////////////