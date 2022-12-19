
var canvas = new fabric.Canvas('canvas')
ctx = canvas.getContext("2d")
holex = 0
holey = 0
ballx = 800
bally = 400


blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	holeObj = img;
	holeObj.scaleToWidth(50)
	holeObj.scaleToHeight(50)
	holeObj.set({
		top:holey,
		left:holex
	})
	canvas.add(holeObj)
	newImage();
}

function newImage()
{
fabric.Image.fromURL("golf-h.png", function(Img) {
ballObj = Img;
ballObj.scaleToWidth(50)
ballObj.set({
	top:bally,
	left:ballx
})
canvas.add(ballObj)
})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		bally--
	}

	function down()
	{
		 bally++
	}

	function left()
	{
		if(ballX >5)
		{
			ballx--
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballx++
		}
	}
	
}
if (ballx==holex)&&(bally = holey) { canvas.remove(ballObj)}

