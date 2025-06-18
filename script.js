const form = document.querySelector("form")
const inputNumbers = document.getElementById("numbers")
const inputFrom = document.getElementById("from")
const inputTo = document.getElementById("to")

let drawnNumbers = []

// Limpa o input de numeros que vem de input type text
inputNumbers.oninput = () => {
	let value = inputNumbers.value.replace(/\D+/g, "")
	inputNumbers.value = value
}

// trata o envio do formulário
form.onsubmit = (e) => {
	e.preventDefault()

	for (let i = 0; i < inputNumbers.value; i++) {
		drawnNumbers.push(drawnNumber(inputFrom.value, inputTo.value))
	}

	form.reset()
	form.remove()

	resultSection(drawnNumbers)
}

// sorteia os numeros
function drawnNumber(from, to) {
	let min = Math.ceil(from)
	let max = Math.floor(to)

	return Math.floor(Math.random() * (max - min + 1) + min)
}

function resultSection(drawnNumbers) {
	try {
		const result = document.getElementById("result")

		// title
		const resultTitle = document.createElement("div")
		resultTitle.classList.add("title")
		resultTitle.innerHTML = "<h2>Resultado do sorteio</h2>"

		// content numbers
		const resultContentN = document.createElement("div")
		resultContentN.classList.add("content-number")

		// the number
		const resultNumberWrapper = document.createElement("div")
		resultNumberWrapper.classList.add("number flex all-center")

    // background dos numeros
    const numberBG = document.createElement("div")
    numberBG.classList.add("bg")

    // the number chosen
    const theNumber = document.createElement("span")
    theNumber.classList.add("number")

	} catch (error) {
		console.log(error)
	}
}
