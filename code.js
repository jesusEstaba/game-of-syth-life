//////////////////////////////////////
//				GRASA				//
//////////////////////////////////////

function incrementsBox (n, limit, count) {
	if (n >= limit) {
		return incrementsBox(n-limit, limit, count+1);
	}
	
	return count;
}

/**
	@param Integer n [box position] 
	@param Integer x [x length array]
	@param Integer y [y length array]
	@param Integer size [size in px canvas element x==y]
*/
function calculateCoordsBox (n, x, y, sizex, sizey) { //{size} suponiendo que sea cuadrado
	var xSize = sizex / x;
	var ySize = sizey / y;

	var Ybox = incrementsBox (n, x, 0);


	return {
		'x' : xSize * (n - (Ybox*x) ), 
		'y' : ySize * Ybox
	};
}


/////////////////HELPERS/////////////////////////////
function randomNum(min, max) {
  return Math.floor(Math.random() * ((max+1) - min)) + min;
}

//////////////////////////////////////////////////



function tableroDeJuego (id) {

	this.juego = document.getElementById(id);

	this.tablero = this.juego.getContext('2d');

	this.createBox = function (num, n, m, color='#000000') {
		var coords = calculateCoordsBox(num, n, m, this.juego.width, this.juego.height);//debe cambiarse por el tamaño del canvas
		this.tablero.fillStyle = color;
		this.tablero.fillRect(coords.x, coords.y, (this.juego.width / n), (this.juego.height / m));//debe cambiarse ´por el tamño x y y del canvas
	};

	this.coordCreateBox = function (x, y, n, m, color='#000000') {
		//var coords = calculateCoordsBox(num, n, m, this.juego.width, this.juego.height);//debe cambiarse por el tamaño del canvas
		//this.tablero.fillStyle = color;
		var xSize = this.juego.width / n;
		var ySize = this.juego.height / m;
		this.tablero.fillStyle = color;
		this.tablero.fillRect(x*xSize, y*ySize, (this.juego.width / n), (this.juego.height / m));//debe cambiarse ´por el tamño x y y del canvas
	};

	this.clear = function () {
		this.tablero.clearRect(0, 0, this.juego.width, this.juego.height);
	};

}




//////////////////////////////////////////////////