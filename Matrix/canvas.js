const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

canvas.style.background = "black"

class Symbol {
    constructor(_x, _y, _fontSize, _canvasHeight) {
        this.caracters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
        this.x = _x
        this.y = _y
        this.fontSize = _fontSize
        this.text = ''
        this.canvasHeight = _canvasHeight
    }

    draw(context) {
        this.text = this.caracters.charAt(Math.floor(Math.random() * this.caracters.length))
        context.fillStyle = '#0aff0a'
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize)
        if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.9) {
            this.y = 0
        } else {
            this.y += 1
        }
    }
}

class Manager {
    constructor(_canvasWidth, _canvasHeight) {
        this.canvasWidth = _canvasWidth
        this.canvasHeight = _canvasHeight
        this.fontSize = 20
        this.columns = this.canvasWidth / this.fontSize
        this.symbols = []
        this.#initialize()
    }

    #initialize() {
        for(let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight)
        }
    }
}

const manager = new Manager(canvas.width, canvas.height)

function animate() {
    ctx.fillStyle = `rgba(0, 0, 0, 0.06)`
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = manager.fontSize + 'px monospace'
    manager.symbols.forEach(symbol => symbol.draw(ctx))
    requestAnimationFrame(animate)
}
animate()
