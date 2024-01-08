const button = document.querySelector('#button')
const paragraph1 = document.querySelector('#paragraph1')

const button2 = document.querySelector('#button2')
const paragraph2 = document.querySelector('#paragraph2')

const button3 = document.querySelector('#button3')
const paragraph3 = document.querySelector('#paragraph3')

const button4 = document.querySelector('#button4')
const paragraph4 = document.querySelector('#paragraph4')

let confirm = true

function buttonOne() {
    if (confirm == true) {
        paragraph1.classList.remove("hidden");
        button.src = "assets/images/icon-minus.svg"
        confirm = false
        
    } else if (confirm == false) {
        paragraph1.classList.add("hidden");
        button.src = "assets/images/icon-plus.svg"
        confirm = true
    }
}

function buttonTwo() {
    if (confirm == true) {
        paragraph2.classList.remove("hidden");
        button2.src = "assets/images/icon-minus.svg"
        confirm = false
    } else if (confirm == false) {
        paragraph2.classList.add("hidden")
        button2.src = "assets/images/icon-plus.svg"
        confirm = true
    }
}

function buttonThree() {
    if (confirm == true) {
        paragraph3.classList.remove("hidden");
        button3.src = "assets/images/icon-minus.svg"
        confirm = false
    } else if (confirm == false) {
        paragraph3.classList.add("hidden")
        button3.src = "assets/images/icon-plus.svg"
        confirm = true
    }
}

function buttonFour() {
    if (confirm == true) {
        paragraph4.classList.remove("hidden");
        button4.src = "assets/images/icon-minus.svg"
        confirm = false
    } else if (confirm == false) {
        paragraph4.classList.add("hidden")
        button4.src = "assets/images/icon-plus.svg"
        confirm = true
    }
}

button.addEventListener('click', function (){ 
    buttonOne()
})

button2.addEventListener('click', function() {
    buttonTwo()
})

button3.addEventListener('click', function() {
    buttonThree()
})

button4.addEventListener('click', function() {
    buttonFour()
})
