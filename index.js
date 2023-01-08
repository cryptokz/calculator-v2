let x = ''; //first number
let y = '' //second number
let sign = ''; // operator
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p');

function ClearAll() {
	x = '';
	y = '';
	sign = '';
	finish = false;
	out.textContent = 0;
}

document.querySelector('.ac').onclick = ClearAll;

document.querySelector('.buttons').onclick = (event) => {
	if(!event.target.classList.contains('btn')) return;
	if (event.target.classList.contains("ac")) return;

	out.textContent = '';
	const key = event.target.textContent;

	//number 0-9 or ,
	if (digit.includes(key)) {
		if(y === '' && sign === ''){
			x += key;
      		console.log(x, y, sign);
     	 	out.textContent = x;
		}else if (x !== '' && y !== '' && finish){
			y = key;
			finish = false;
			out.textContent = y;
		}else{
			y += key;
			out.textContent = y;
		}
  		console.log(x, y, sign);
		return;

	}

	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.log(x, y, sign);
		return;
	}

	if (key === '=') {
		if (y === '') y = x
		switch (sign) {
			case '+':
				x = (+x) + (+y);
				break;
			case '-':
				x = x - y;
				break;
			case 'X':
				x = x * y;
				break;
			case '/':
				if (y === '0'){
					out.textContent = 'Ошибка';
					x = '';
					y = '';
					sign = '';
					return;
				}
				x = x / y;
				break;
		}
		finish = true;
		out.textContent = x;
		console.log(x, y, sign);
	}
}










