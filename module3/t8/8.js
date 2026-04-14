const calcButton = document.querySelector('#start');
calcButton.addEventListener('click', () => {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;

  if (operation === 'add')
    document.querySelector('#result').innerHTML = num1 + num2;
  else if (operation === 'sub')
    document.querySelector('#result').innerHTML = num1 - num2;
  else if (operation === 'multi')
    document.querySelector('#result').innerHTML = num1 * num2;
  else if (operation === 'div')
    document.querySelector('#result').innerHTML = num1 / num2;
});
