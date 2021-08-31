const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
	constructor() {
		this.color = 'rgb(123, 50, 250)';
		this.radius = 15;
		this.moveSpeed = 3;
		this.x = 0;
		this.y = 0;
	}
	move(dir) {
		switch(parseInt(dir)) {
			case 0:
				this.x -= this.moveSpeed;
				break;
			case 1:
				this.y -= this.moveSpeed;
				break;
			case 2:
				this.x += this.moveSpeed;
				break;
			case 3:
				this.y += this.moveSpeed;
				break;	
		}
	}
	draw() {
		ctx.beginPath();
		ctx.arc(canvas.width / 2, canvas.height / 2, this.radius, 0, 2 * Math.PI,  false);
		ctx.fill();
		ctx.closePath();
	}
}
class Map {
	constructor() {

	}
	draw(player, image) {
		this.x = -player.x - image.width / 2;
		this.y = -player.y - image.height / 2;
		// this.x = -player.x - 500;
		// this.y = -player.y - 500;
		ctx.drawImage(image, this.x, this.y);
	}
}
function render() {
	for (let i = 0; i < move.length; i++) {
		if (move[i]) {
			player.move(i);
		}
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	bg.draw(player, bgimage);
	player.draw();
}
class Gun {
	constructor() {
		this.x 
	}
}
class Bullet {
	constructor()  {
		this.color = '#AF9B60';
		this.x = 0;
		this.y = 0;
	}
	draw(gun, mousePos) {
		this.dir = Math.atan(mousePos[0])
		this.relx = gun.x + this.x;
		this.rely = gun.y + this.y;
	}
}
class Enemy {

}

var player = new Player();
var move = [false, false, false, false];
const bgimage = document.getElementById('bg');
var bg = new Map();

function setup() {
	player.draw();
}
document.onkeydown = function(e) {
	move[e.keyCode - 37] = true;
	// console.log(move);
}
document.onkeyup = function(e) {
	move[e.keyCode - 37] = false;
}
setInterval(render, 10);