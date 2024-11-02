const name = "Кирилл";
const famil = "Косткин";
const name_job = "KSK Technology";
const link_job = "https://uclck.ru/KSK-Tech";
const mobile = "+79374941499";
const mail = "kostkin05kirill@gmail.com";
const telegram = "http://t.me/KEfest";
const whatsApp = "+79374941499";
const vk = "https://vk.com/k.kostkin";

document.querySelector(".name").innerHTML = name;
document.querySelector(".famil").innerHTML = famil;
document.querySelector(".linkJob").innerHTML = link_job;
// document.querySelector(".Button_call").innerHTML += "<p>call</p>";
document.querySelector(".Button_call").setAttribute('href', 'tel:${mobile}');
// document.querySelector(".ButtonMail").innerHTML += "<p>email</p>";
document.querySelector(".ButtonMail").setAttribute('href', "mailto:${mail}");
