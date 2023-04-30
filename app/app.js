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












const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_69w3aa3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});