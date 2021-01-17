const app = Vue.createApp({
    data() {
        return {
            numSquares: 0,
            colors: [],
            pickedColor: '',
            square1: '',
            square2: '',
            square3: '',
            square4: '',
            square5: '',
            square6: ''
        };
    },
    methods: {
        selectGameMode(num) {
            this.colors = [];
            this.numSquares = num;
            this.colors = this.generateRandomColors(this.numSquares);
        },
        generateRandomColors(numColors) {
            for (let i = 0; i < numColors; i++) {
                this.colors.push(this.randomColor());
            }
            this.pickedColor = this.pickColor();
            console.log(this.colors);

            this.setSquareBackgrounds(this.colors);
            
        },
        randomColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            return `rgb(${r}, ${g}, ${b})`;
        },
        pickColor() {
            let random = Math.floor(Math.random() * this.colors.length);
            return this.colors[random];
        },
        setSquareBackgrounds(colors) {
            this.square1 = colors[0];
            this.square2 = colors[1];
            this.square3 = colors[2];
            this.square4 = colors[3];
            this.square5 = colors[4];
            this.square6 = colors[5];
        },
        checkSquare(squareNum) {
            switch (squareNum) {
                case 1:
                    if (this.square1 === this.pickedColor) {
                        console.log("Correct!");
                    } else {
                        console.log("Wrong.");
                    }
                    break;
                case 2:
                    if (this.square2 === this.pickedColor) {
                        console.log("Correct!");
                    } else {
                        console.log("Wrong.");
                    }
                    break;
                case 3:
                    if (this.square3 === this.pickedColor) {
                        console.log("Correct!");
                    } else {
                        console.log("Wrong.");
                    }
                    break;
                case 4:
                    if (this.square4 === this.pickedColor) {
                        console.log("Correct!");
                    } else {
                        console.log("Wrong.");
                    }
                    break;
                case 5:
                    if (this.square5 === this.pickedColor) {
                        console.log("Correct!");
                    } else {
                        console.log("Wrong.");
                    }
                    break;
                case 6:
                    if (this.square6 === this.pickedColor) {
                        console.log("Correct!");
                    } else {
                        console.log("Wrong.");
                    }
                    break;
                default:
                    break;
            }
        }
    },
    computed: {
        
    }
});

app.mount('#app');