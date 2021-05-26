var returnMessageButton = document.querySelector('.receive-message');

returnMessageButton.addEventListener('click', returnMessage)

function returnMessage() {
  console.log('Josh was here.');
  return 'Josh was here.';
};
