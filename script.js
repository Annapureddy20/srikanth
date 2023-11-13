document.getElementById('addButton').addEventListener('click', function () {
  performOperation('add');
});

document.getElementById('subtractButton').addEventListener('click', function () {
  performOperation('subtract');
});

function performOperation(operation) {
  var num1 = Math.floor(Math.random() * 50) + 1;
  var num2 = Math.floor(Math.random() * 50) + 1;
  var result;

  if (operation === 'add') {
    result = num1 + num2;
    document.getElementById('operator').innerText = '+';
  } else {
    result = num1 - num2;
    document.getElementById('operator').innerText = '-';
  }

  document.getElementById('num1').innerText = num1;
  document.getElementById('num2').innerText = num2;
  document.getElementById('result').innerText = 'Result: ' + result;
}
