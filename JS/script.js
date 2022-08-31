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