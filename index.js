/* Первое задание */
let btn_create_array_20 = document.getElementById('create_array_20');
let btn_replacement = document.getElementById('replacement');
let out_array_20 = document.getElementById('out_array_20');
let out_replacement = document.getElementById('out_replacement');
let out_number_replacements = document.getElementById('out_number_replacements');
let mas_numbers = [];
let max = 9;
let min = 1;
let number_of_substitutions = 0;

btn_create_array_20.onclick = function get_array() {
	for (let i = 0; i < 20; i++) {
		mas_numbers[i] = Math.floor(Math.random() * (max - min + 1) + min);
	}
	out_array_20.innerHTML = mas_numbers;
}

btn_replacement.onclick = function get_replacement() {
	for (let i = 0; i <= mas_numbers.length; i++) {
		if (mas_numbers[i] == 5) {
			mas_numbers[i] = 0;
			number_of_substitutions++;
		}
	}
	out_replacement.innerHTML = mas_numbers;
	out_number_replacements.innerHTML = "Количество замененных элементов = " + number_of_substitutions;
	number_of_substitutions = 0;
}

/* Второе задание  */
let btn_create_array_100 = document.getElementById('create_array_100');
let out_array_100 = document.getElementById('out_array_100');
let out_array = document.getElementById('out_array');
let out_array_without_repetition = document.getElementById('out_array_without_repetition');

let max_numbers_100 = 100;
let min_numbers_100 = 10;

btn_create_array_100.onclick = function get_array() {
	let mas_numbers_100 = [];
	let mas_number = [];
	let mas_number_w_r = [];
	for (let i = 0; i < 100; i++) {
		mas_numbers_100[i] = Math.floor(Math.random() * (max_numbers_100 - min_numbers_100 + 1) + min_numbers_100);

		if (mas_numbers_100[i] % 5 != 0) {
			mas_number.push(mas_numbers_100[i])
		}
	}

	for (let x = 0; x < mas_number.length; x++) {
		let num = mas_number[x];
		let arr = Array.from(String(num), Number);
		for (let j = 1; j < arr.length; j++) {
			if (arr[j] != arr[j - 1]) {
				mas_number_w_r.push(num);
				break;
			}
		}
	}

	var html = '<table><tr>';
	for (var i = 0; i < mas_number_w_r.length; i++) {
		if (i % 3 == 0) {
			html += '</tr>';
		}
		html += '<td>' + mas_number_w_r[i] + '</td>';
	}
	html += '</tr></table>';

	
	out_array_100.innerHTML = mas_numbers_100;
	out_array.innerHTML = mas_number;
	out_array_without_repetition.innerHTML = mas_number_w_r;
	document.getElementById('mas_table').innerHTML = html;
}