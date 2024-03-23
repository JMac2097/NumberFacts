const NUMBERS_API_URL = 'http://numbersapi.com/';
const numberInput = document.querySelector('.number-fact input');
const numberFact = document.querySelector('.number-fact .fact');
const getSingleFact = document.querySelector('.js-getSingleFact');
const clearFact = document.querySelector('.js-clearFact');


const handleInputSubmit = () => {
	const number = numberInput.value;
  number ? getNumberFact(number) : numberFact.textContent = 'Please enter a number';
};

const getNumberFact = async (number) => {
	try {
		const response = await fetch(`${NUMBERS_API_URL}${number}`);
		const fact = await response.text();
		numberFact.textContent = fact;
		clearFact.disabled = false;
	} catch {
		numberFact.textContent = 'Error: number not found';
	}
}     

const clearInput = () => {
	numberInput.value = '';
	numberFact.textContent = '';
	clearFact.disabled = true;
}

getSingleFact.addEventListener('click', handleInputSubmit);
clearFact.addEventListener('click', clearInput);
