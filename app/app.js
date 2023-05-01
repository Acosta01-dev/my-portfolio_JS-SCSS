const burguer_btn = document.getElementsByClassName('burguer_menu')[0];
const mobile_nav = document.getElementById('mobile-nav');
burguer_btn.addEventListener('click', function () {


    let transformValue = burguer_btn.style.transform;

    if (transformValue === "rotate(90deg)") {
        burguer_btn.style.transform = "rotate(0deg)";
    }
    else {
        burguer_btn.style.transform = "rotate(90deg)";
    }

    if (mobile_nav.style.maxHeight) {
        mobile_nav.style.maxHeight = null;
    } else {
        mobile_nav.style.maxHeight = mobile_nav.scrollHeight + "px";
    }
});





const tabs = document.querySelectorAll(".tabs_button");
const tabContent = document.querySelectorAll('.tab-content');
const tabz = document.querySelectorAll(".tabz_button");
const timeline_content= document.querySelectorAll(".timeline");

tabs.forEach((tab, i) => {
    tab.addEventListener('click', function () {

        tabs.forEach(content => { content.classList.remove("tab-active") });
        tabs[i].classList.add("tab-active");

        tabContent.forEach(content => { content.classList.remove("tab-content-active") });
        tabContent[i].classList.add("tab-content-active");
    });
});
tabz.forEach((tab, i) => {
    tab.addEventListener('click', function () {
        tabz.forEach(content => { content.classList.remove("tab-active") });
        tabz[i].classList.add("tab-active");

        timeline_content.forEach(content => { content.classList.remove("tab-content-active") });
        timeline_content[i].classList.add("tab-content-active");

    });
});





const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Frontend", "Backend", "Fullstack"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});





const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_69w3aa3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Sent!';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});