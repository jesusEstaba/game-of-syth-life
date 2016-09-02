function createRandom01Array(n, m) {
	var universo = new Array(n);

	for (var i = 0; i<n; i++) {
		universo[i] = new Array(m);
		for (var j = 0; j<m; j++) {
			universo[i][j] = randomNum(0, 1);
		}
	}

	return universo;
}


var nuevoJuego = new tableroDeJuego('juego');

var size1 = 100,
	size2 = 100,
	speed = 0;


var tablero = createRandom01Array(size1, size2);

var colores = [
	'#3596c1',
	'#bf1e90',
	'#021d28',
];
/*
colores = [
	'#021d28',
];
*/

//juegoDeLaVida(tablero, colores);

function draw () {
	nuevoJuego.clear();
	juegoDeLaVida(tablero, colores);
		
}


function iniciar() {
	var btn = document.getElementById("init");

	if (speed<5) {
		setInterval(function(){
			draw();
		}, 100);
		speed++;

		
		btn.textContent = 'Amentar x' + speed + ' la velocidad';
	} else {
		console.warn('Ya va a maxima velocidad!');
		btn.textContent = 'Ya va a maxima velocidad!';
	}
	
}




function juegoDeLaVida(universo, colors = []) {
	function examinar(array, x, y, maxX, maxY) {
		var cont = 0;

		
		for (var i = x-1; i<=x+1; i++) {
			for (var j = y-1; j<=y+1; j++) {
				if (i>=0 && j>=0 && (i!=x || j!=y) && i<maxX && j<maxY) {
					if (array[i][j]==1) {
						cont++;
					}
				}
			}
		}

		return cont;
	}

	function randColor () {

		return colors[randomNum(0, colors.length-1)];
	}

	var x = universo.length,
		y = universo[0].length;


	for (var i = 0; i<x; i++) {
		for (var j = 0; j<y; j++) {
			var alRededor = examinar(universo, i, j, x, y);

			if (alRededor<2 || alRededor>3 || alRededor===0) {
				universo[i][j] = 0;
				//nuevoJuego.coordCreateBox(i, j, x, y, '#fff');
			} else if (alRededor==3) {
				universo[i][j] = 1;
				if (colors.length) {
					nuevoJuego.coordCreateBox(i, j, x, y, randColor());
				} else {
					nuevoJuego.coordCreateBox(i, j, x, y, '#000000');
				}
				
			}
		}
	}

	return universo;
}



