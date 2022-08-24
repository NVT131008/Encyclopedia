let subject1 = document.getElementById('subject1');
let subject2 = document.getElementById('subject2');
let subject3 = document.getElementById('subject3');
let subject4 = document.getElementById('subject4');
let subject5 = document.getElementById('subject5');
let subject6 = document.getElementById('subject6');
let subject7 = document.getElementById('subject7');
let subject8 = document.getElementById('subject8');
let subject9 = document.getElementById('subject9');

let mainPage = document.getElementById('mainPage');
let createPage = document.getElementById('createPage');
let modifyPage = document.getElementById('modifyPage');
let aboutUs = document.getElementById('aboutUs');
let currentEvents = document.getElementById('currentEvents');

mainPage.addEventListener('click', () => {
  location.href = "../HTML/Mainpage.html"
})

createPage.addEventListener('click', () => {
  location.href = "../HTML/Createpage.html"
})

modifyPage.addEventListener('click', () => {
  location.href = "../HTML/Modifypage.html"
})

aboutUs.addEventListener('click', () => {
  location.href = "../HTML/Aboutus.html"
})

currentEvents.addEventListener('click', () => {
  location.href = "../HTML/Events.html"
})

subject9.addEventListener('click', () => {
  location.href = "../HTML/Subject.html"
})
