const button = document.getElementById('btn');
let id = document.getElementById('advice-id');
let advice = document.getElementById('advice-text');

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice"); //fetch advice data 
  const data = await response.json(); //parse data as json

  //add id and advice text to DOM elements
  id.innerText += data.slip.id;
  advice.innerText += data.slip.advice;
}

getAdvice(); //when page loads, load the first advice

button.addEventListener('click', () => {
  if (!id && !advice) getAdvice(); //if empty, load piece of advice

  //if not empty reset and load next piece of advice
  id.innerText = 'Advice #';
  advice.innerText = '';
  getAdvice();
});