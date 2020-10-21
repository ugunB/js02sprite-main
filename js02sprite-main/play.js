// холст для рисования - игровое поле
let board = document.getElementById('cnv').getContext('2d');
let boardObject = document.getElementById('cnv');

// фоновая клетка 32×32 - трава
let bg = document.getElementById('grass');

// персонаж, спрайт 32×32 – привидение из пакмана
let char = document.getElementById('ghost');

// координаты персонажа, столбец и строка, считая с нуля
let ghostCol = 0, ghostRow = 0;

let msg = document.getElementById('msg');
let maxC = 16;
let maxR = 10;
let gridSize = 32;
// после загрузки картинок рисуем начальное состояние поля
function init() {
	for (let col = 0; col < maxC; col++) {
		for (let row = 0; row < maxR; row++) {
			board.drawImage(bg, col*gridSize, row*gridSize);
		}
		if (col === ghostCol) board.drawImage(char, ghostCol*gridSize, ghostRow*gridSize);
		
	}	
};

function moveOnce(event) {
	let cnvBorder = boardObject.getBoundingClientRect(); 
	console.log(cnvBorder.top, cnvBorder.right, cnvBorder.bottom, cnvBorder.left); 

	
	if (event.clientX > cnvBorder.right && event.clientY > cnvBorder.top && event.clientY < cnvBorder.bottom || event.key === "d" || event.key === "ArrowRight") {
		if (ghostCol < maxC-1) {
			board.drawImage(bg, ghostCol*gridSize, ghostRow*gridSize); 
			ghostCol++;
		}	
	}

	//  влево
	if (event.clientX < cnvBorder.left && event.clientY > cnvBorder.top && event.clientY < cnvBorder.bottom || event.key === "a" || event.key === "ArrowLeft") {
		if (ghostCol > 0) {
			board.drawImage(bg, ghostCol*gridSize, ghostRow*gridSize);
			ghostCol--;
		}	
	}

	//  вверх
	if (event.clientY < cnvBorder.top && event.clientX > cnvBorder.left && event.clientX < cnvBorder.right || event.key === "w" || event.key === "ArrowUp") {
		if (ghostRow > 0) {
			board.drawImage(bg, ghostCol*gridSize, ghostRow*gridSize);
			ghostRow--;
		}	
	}

	//  вниз
	if (event.clientY > cnvBorder.bottom && event.clientX > cnvBorder.left && event.clientX < cnvBorder.right || event.key === "s" || event.key === "ArrowDown") {
		if (ghostRow < maxR-1) {
			board.drawImage(bg, ghostCol*gridSize, ghostRow*gridSize);
			ghostRow++;
		}	
	}
	board.drawImage(char, ghostCol*gridSize, ghostRow*gridSize);
	if (event.type == "mouseup") {
		msg.value = "Клик в "+ event.clientX + ", "+ event.clientY +"!";
	}
}
	
window.onload = init;
document.onmouseup = moveOnce;
document.onkeyup = moveOnce;
