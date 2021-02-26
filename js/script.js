var elFizzBuzzForm = document.querySelector('.fizzbuzz-form')
var elFizzBuzzButton = document.querySelector('.form__button');
var elFizzBuzzResult = document.querySelector('.form-result');
var FIZZ = 3;
var BUZZ = 5;

elFizzBuzzForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var elFizzBuzzInput = parseFloat(Math.floor(document.querySelector('.form__input').value.trim()), 10);
  console.log(elFizzBuzzInput);   
  if (isNaN(elFizzBuzzInput)) {
    return elFizzBuzzResult.textContent = 'Not a number';
  }
  else if ((elFizzBuzzInput % FIZZ === 0) && (elFizzBuzzInput % BUZZ === 0)){
    return elFizzBuzzResult.textContent = 'fizzBuzz';
  }
  else if (elFizzBuzzInput % FIZZ === 0){
    return elFizzBuzzResult.textContent = 'fizz';
  }
  else if (elFizzBuzzInput % BUZZ === 0) {
    return elFizzBuzzResult.textContent = 'buzz';
  }
  else {
    return elFizzBuzzResult.textContent = 'bo\'linmaydi';
  }
})