$(document).ready(function () {
    $('div.hidden').fadeIn(1500).removeClass('hidden');
});

var returnMessageButton = document.querySelector('.receive-message');
var fadeInMessage = document.querySelector('.fade-in-message');
var messageType = document.getElementsByName('message-type-select');
var meditationImage = document.querySelector('.meditation-image');
var clearMessageButton = document.querySelector('.clear-message');
var messageBox = document.querySelector('.message-load-box');

returnMessageButton.addEventListener('click', returnMessage);
clearMessageButton.addEventListener('click', clearMessage);


var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];



function returnMessage() {
  for (i = 0; i < messageType.length; i++) {
    if (document.getElementById('affirmation-select').checked) {
      console.log('Josh was here.'); //Don't remove - vital
      fadeInMessage.innerText = affirmations[getRandomIndex(affirmations)];
    } else if (document.getElementById('mantra-select').checked) {
      fadeInMessage.innerText = mantras[getRandomIndex(mantras)];
    } else {
      fadeInMessage.innerText =
      "It looks like you haven't selected a message type. Try again?";
    }
  }
  checkImageToggle();
  clearMessageButton.style.display = "block";
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function toggleImage() {
  if (meditationImage.style.display === "none") {
    meditationImage.style.display = "block";
  } else {
    meditationImage.style.display = "none";
  }
};

function checkImageToggle() {
  if (fadeInMessage.innerText === null) {
    meditationImage.style.display = "block"
  } else {
    meditationImage.style.display = "none";
  }
}

function toggleClearButton() {
  // clearMessageButton.style.visibility = "visible";
  if (clearMessageButton.style.display === "none") {
    clearMessageButton.style.display = "block";
  } else {
    clearMessageButton.style.display = "none";
  }
  // checkImageToggle();
};

function checkClearToggle() {
  if (!fadeInMessage.style.display === null) {
    clearMessageButton.style.display = "block";
  }
}

function clearMessage() {
  fadeInMessage.innerText = null;
  clearMessageButton.style.display = "none";
  meditationImage.style.display = "block";
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
