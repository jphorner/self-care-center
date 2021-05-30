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
  " ",
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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function removeImage() {
  meditationImage.parentNode.removeChild(meditationImage);
  // meditationImage.style.height = 0;
  // meditationImage.style.width = 0;
};

function displayImage() {
  meditationImage.style.visibility = "visible";
  messageBox.appendChild(meditationImage);
};

function returnMessage() {
  for (i = 0; i < messageType.length; i++) {
    if (document.getElementById('affirmation-select').checked) {
      console.log('Josh was here.');
      fadeInMessage.innerText = affirmations[getRandomIndex(affirmations)];
    } else if (document.getElementById('mantra-select').checked) {
      fadeInMessage.innerText = mantras[getRandomIndex(mantras)];
    } else {
      fadeInMessage.innerText =
      "It looks like you haven't selected a message type. Try again?"
    }
    removeImage();
    fadeInMessage.style.visibility = "visible";
    clearMessageButton.style.visibility = "visible";
  }
};

function clearMessage() {
  fadeInMessage.innerText = null;
  clearMessageButton.style.visibility = "hidden";
  displayImage();
}
