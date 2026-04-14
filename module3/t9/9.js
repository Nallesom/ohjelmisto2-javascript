const calcButton = document.querySelector('#start');
calcButton.addEventListener('click', () => {
  const calculation = document.getElementById('calculation').value;

  // A little messy shortcutting, but its fine surely.
  if (calculation.includes('+'))
    document.querySelector('#result').innerHTML = parseInt(
        calculation.split('+')[0]) + parseInt(calculation.split('+')[1]);
  else if (calculation.includes('-'))
    document.querySelector('#result').innerHTML = parseInt(
        calculation.split('-')[0]) - parseInt(calculation.split('-')[1]);
  else if (calculation.includes('*'))
    document.querySelector('#result').innerHTML = parseInt(
        calculation.split('*')[0]) * parseInt(calculation.split('*')[1]);
  else if (calculation.includes('/'))
    document.querySelector('#result').innerHTML = parseInt(
        calculation.split('/')[0]) / parseInt(calculation.split('/')[1]);
});
