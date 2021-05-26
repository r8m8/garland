class Garland {
    constructor(rows, cols, width, height) {
        this.rows = rows;
        this.cols = cols;
        this.width = width;
        this.height = height;
        this.makeGrid();
    }

    makeGrid() {
        let result = [];
        let fieldContainer = document.querySelector('.field-container');
        
        for (let i = 0; i < this.cols; i++){
            let div = document.createElement('div');
                div.className = 'lamp';
                div.style.width = this.width + 'px';
                div.style.height = this.height + 'px';  
                div.append();
                result.push(div)
        }
        
        let containerRow = document.createElement('div');
            containerRow.className = 'container-row';
            containerRow.append(...result);
            fieldContainer.append(containerRow);
    
        for (let i = 1; i !== this.rows; i++){
            const newContainerRow = containerRow.cloneNode(true);
            fieldContainer.appendChild(newContainerRow) 
        }
    }
}

class Mode {
    constructor() {
        this.selectMode();
    }
    lampsArr = Array.from(document.querySelectorAll('.lamp'));

    intervalMode = null;
    intervalColor = null;

    color = document.getElementById('color').value;

    selectColor = document.getElementById('color').onchange = () => {
        clearInterval(this.intervalColor);
        this.color = document.getElementById('color').value;
        if (this.color === 'other-color') {
            document.getElementById('input-color').hidden = false;
        } else {
            document.getElementById('input-color').hidden = true
        }
        if (this.color === 'all-colors') {
            this.selectAllColors();
        }
        this.clearColor();
    }

    selectCustomColor = document.getElementById('input-color').oninput = () => {
        this.color = document.getElementById('input-color').value;
        this.clearColor();
    }

    selectAllColors() {
        let colorsArr = [
            "IndianRed",
            "LightCoral",
            "Salmon",
            "DarkSalmon",
            "LightSalmon",
            "Crimson",
            "Red",
            "FireBrick",
            "DarkRed",
            "Pink",
            "LightPink",
            "HotPink",
            "DeepPink",
            "MediumVioletRed",
            "PaleVioletRed",
            "LightSalmon",
            "Coral",
            "Tomato",
            "OrangeRed",
            "DarkOrange",
            "Orange",
            "Gold",
            "Yellow",
            "LightYellow",
            "LemonChiffon",
            "LightGoldenrodYellow",
            "PapayaWhip",
            "Moccasin",
            "PeachPuff",
            "PaleGoldenrod",
            "Khaki",
            "DarkKhaki",
            "Lavender",
            "Thistle",
            "Plum",
            "Violet",
            "Orchid",
            "Fuchsia",
            "Magenta",
            "MediumOrchid",
            "MediumPurple",
            "BlueViolet",
            "DarkViolet",
            "DarkOrchid",
            "DarkMagenta",
            "Purple",
            "Indigo",
            "SlateBlue",
            "DarkSlateBlue",
            "Cornsilk",
            "BlanchedAlmond",
            "Bisque",
            "NavajoWhite",
            "Wheat",
            "BurlyWood",
            "Tan",
            "RosyBrown",
            "SandyBrown",
            "Goldenrod",
            "DarkGoldenRod",
            "Peru",
            "Chocolate",
            "SaddleBrown",
            "Sienna",
            "Brown",
            "Maroon",
            "Black",
            "Gray",
            "Silver",
            "White",
            "Fuchsia",
            "Purple",
            "Red",
            "Maroon",
            "Yellow",
            "Olive",
            "Lime",
            "Green",
            "Aqua",
            "Teal",
            "Blue",
            "Navy",
            "GreenYellow",
            "Chartreuse",
            "LawnGreen",
            "Lime",
            "LimeGreen",
            "PaleGreen",
            "LightGreen",
            "MediumSpringGreen",
            "SpringGreen",
            "MediumSeaGreen",
            "SeaGreen",
            "ForestGreen",
            "Green",
            "DarkGreen",
            "YellowGreen",
            "OliveDrab",
            "Olive",
            "DarkOliveGreen",
            "MediumAquamarine",
            "DarkSeaGreen",
            "LightSeaGreen",
            "DarkCyan",
            "Teal",
            "Aqua",
            "Cyan",
            "LightCyan",
            "PaleTurquoise",
            "Aquamarine",
            "Turquoise",
            "MediumTurquoise",
            "DarkTurquoise",
            "CadetBlue",
            "SteelBlue",
            "LightSteelBlue",
            "PowderBlue",
            "LightBlue",
            "SkyBlue",
            "LightSkyBlue",
            "DeepSkyBlue",
            "DodgerBlue",
            "CornflowerBlue",
            "MediumSlateBlue",
            "RoyalBlue",
            "Blue",
            "MediumBlue",
            "DarkBlue",
            "Navy",
            "MidnightBlue",
            "White",
            "Snow",
            "Honeydew",
            "MintCream",
            "Azure",
            "AliceBlue",
            "GhostWhite",
            "WhiteSmoke",
            "Seashell",
            "Beige",
            "OldLace",
            "FloralWhite",
            "Ivory",
            "AntiqueWhite",
            "Linen",
            "LavenderBlush",
            "MistyRose",
            "Gainsboro",
            "LightGrey",
            "LightGray",
            "Silver",
            "DarkGray",
            "DarkGrey",
            "Gray",
            "Grey",
            "DimGray",
            "DimGrey",
            "LightSlateGray",
            "LightSlateGrey",
            "SlateGray",
            "SlateGrey",
            "DarkSlateGray",
            "DarkSlateGrey",
            "Black"
        ]
        let min = 0;
        let max = colorsArr.length - 1
        this.intervalColor = setInterval(() => {
            let randomColor = (Math.floor(Math.random() * (max - min + 1)) + min);
            this.color = colorsArr[randomColor];
        }, 30)      
    }

    selectMode = document.getElementById('mode').onchange = () => {
        document.getElementById('number').hidden = true;
        clearInterval(this.intervalMode);
        this.clearColor()
        const mode = document.getElementById('mode').value;
        switch (mode) {
            case 'consistentenly-mode':
                this.consistentenlyMode();
                break;
        
            case 'random-mode':
                this.randomMode();
                break;
    
            case 'custom-mode':
                this.customMode();
                break;
        }
    }

    clearColor() {
        this.lampsArr.forEach((item) => {
            item.style.backgroundColor = null;
        })
    }

    consistentenlyMode() {
        let index = 0;
        this.intervalMode = setInterval(() => {
            if(index >= this.lampsArr.length){
                index = 0;
                this.clearColor();
        }
            this.lampsArr[index].style.backgroundColor = this.color;
            index++;
        }, 30);
    }

    customMode() {
        let inputNumber = document.getElementById('number');
            inputNumber.max = this.lampsArr.length;
            inputNumber.value = '0';
            inputNumber.hidden = false;

        let increment = +inputNumber.value;
        inputNumber.onchange = () => {
            increment = +inputNumber.value;
            index = 0;
            this.clearColor();
        };

        let index = 0;
        
        this.intervalMode = setInterval(() => {
            if (index >= this.lampsArr.length) {
                index = 0;
                this.clearColor()
        }
            this.lampsArr[index].style.backgroundColor = this.color;
            index += increment;
        }, 30);
}

    randomMode() {
        let min = 1;
        let max = this.lampsArr.length;
        this.intervalMode = setInterval(() => {
            let randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min) - 1;
            if (randomNumber == this.lampsArr.length / 2
                || randomNumber == this.lampsArr.length / 3 
                || randomNumber == this.lampsArr.length / 4) {
                this.clearColor();
            }
            this.lampsArr[randomNumber].style.backgroundColor = this.color;
        }, 30);
    }
}

let condition = false;

let initButton = document.getElementById('init-button');
initButton.onclick = (() => {
    condition = !condition;
    if (condition === true) {
        new Garland(+prompt('Кол-во строк?', '20'),
                    +prompt('Кол-во столбцов?', '20'),
                    +prompt('Ширина лампы?', '20'),
                    +prompt('Высота лампы?', '20'))
        new Mode;
        initButton.textContent = 'Удалить сетку';
        document.getElementById('mode-container').hidden = false
    } else {
        let clone = document.querySelector('.field-container').cloneNode(false);
        document.querySelector('.field-container').remove();
        document.querySelector('.field').appendChild(clone);
        initButton.textContent = 'Создать сетку';
        document.getElementById('mode-container').hidden = true
    }
})

