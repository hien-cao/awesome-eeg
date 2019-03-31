export class ImageService {
	constructor() {
		this.bird = new Image();
		this.bg = new Image();
		this.fg = new Image();
		this.pipeNorth = new Image();
		this.pipeSouth = new Image();
		// add src of the images
		this.bird.src = 'images/bird.png';
		this.bg.src = 'images/bg.png';
		this.fg.src = 'images/fg.png';
		this.pipeNorth.src = 'images/pipeNorth.png';
		this.pipeSouth.src = 'images/pipeSouth.png';
	}

	getImage() {
		return [ this.bird, this.bg, this.fg, this.pipeNorth, this.pipeSouth ];
	}
}
