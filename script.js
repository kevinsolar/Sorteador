const form = document.querySelector("form")
const inputNumbers = document.getElementById("numbers")
const inputFrom = document.getElementById("from")
const inputTo = document.getElementById("to")

let drawnNumbers = []

inputNumbers.oninput = () => {
	let value = inputNumbers.value.replace(/\D+/g, "")
	inputNumbers.value = value
}

form.onsubmit = (e) => {
	e.preventDefault()

	for (let i = 0; i < inputNumbers.value; i++) {
		drawnNumbers.push(drawnNumber(inputFrom.value, inputTo.value))
	}

	form.reset()

}

function drawnNumber(from, to) {
	let min = Math.ceil(from)
	let max = Math.floor(to)

	return Math.floor(Math.random() * (max - min + 1) + min)
}

function 
