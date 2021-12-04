class Footer {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = 0;
        this.vx = -3;
        this.width = 466;
        this.height = 79;




        this.img = new Image()
        this.img.src = './images/game-bg-footer.png'
        this.img.isReady = false;

        this.img.onload = () => {
            this.img.isReady = true;
        }
    }
    draw() {
        if (this.img.isReady) {
            this.ctx.drawImage(
                this.img,
                this.x,
                this.ctx.canvas.height - this.height,
                this.width,
                this.height)
            this.ctx.drawImage(
                this.img,
                this.x - this.width,
                0,
                this.width,
                this.height)

        }

    }
    move() {
        this.x += this.vx

        if (this.x + this.width <= 0) {
            this.x = 0
        }
    }
}