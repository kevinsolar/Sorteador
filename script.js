const form = document.querySelector("form")
const inputNumbers = document.getElementById("numbers")
const inputFrom = document.getElementById("from")
const inputTo = document.getElementById("to")
const faqMobile = document.querySelector(".mobile-only.faq")
const noRepeat = document.getElementById("repeat")

let drawnNumbers = []

// Limpa o input de numeros que vem de input type text
inputNumbers.oninput = () => {
	let value = inputNumbers.value.replace(/\D+/g, "")
	inputNumbers.value = value
}

// trata o envio do formulário
form.onsubmit = (e) => {
	e.preventDefault()

  // nao deixa a quantiade ser 0
  inputNumbers.value = Number(inputNumbers.value) < 1 ? 1 : inputNumbers.value

	if (inputFrom.value >= inputTo.value) {
    console.log("escolha valores distantes")
    return
  }

	// previne um loop infinito em caso de que a qauntidade de numeros for maior que o range entre o valor menor(inputFrom) e valor maior(inputTo)
	const maxPossible = inputTo - inputFrom + 1
	if (inputNumbers > maxPossible) return

	// Gerar números
	if (noRepeat.checked) {
		// Números únicos - usar while em vez de for
		while (drawnNumbers.length < inputNumbers.value) {
			let number = drawnNumber(inputFrom.value, inputTo.value)
			if (!drawnNumbers.includes(number)) {
				drawnNumbers.push(number)
			}
		}
	} else {
		// Números podem repetir
		for (let i = 0; i < inputNumbers.value; i++) {
			drawnNumbers.push(drawnNumber(inputFrom.value, inputTo.value))
		}
	}

	// reseta e remove o form
	form.reset()
	form.remove()

	faqMobile.remove()

	// cria a secao de resultado com a funcao de criacao
	resultSection()

	// adiciona os numeros da lista ja com a estilizacao da funcao
	drawnNumbers.map((number) => {
		theResult(number)
	})

	// adiciona o botao de jogar novamente com a funcao de reload
	drawnAgain()
}

// sorteia os numeros
function drawnNumber(from, to) {
	let min = Math.ceil(from)
	let max = Math.floor(to)

	return Math.floor(Math.random() * (max - min + 1) + min)
}

function resultSection() {
	const result = document.getElementById("result")

	// cria o titulo da secao dos resultados
	const resultTitle = document.createElement("div")
	resultTitle.classList.add("title")
	resultTitle.innerHTML = "<h2>Resultado do sorteio</h2>"

	// cria o portador de cada numero, o container
	const resultContentN = document.createElement("div")
	resultContentN.classList.add("content-number")

	// adiciona os campos criados
	result.append(resultTitle, resultContentN)
}

function theResult(drawnNumber) {
	try {
		const container = document.querySelector(".content-number")

		const resultNumber = document.createElement("div")
		resultNumber.classList.add("number", "flex", "all-center")

		// background dos numeros
		const numberBG = document.createElement("div")
		numberBG.classList.add("bg")

		// the number chosen
		const theNumber = document.createElement("span")
		theNumber.classList.add("the_number")
		theNumber.textContent = drawnNumber

		resultNumber.append(numberBG, theNumber)

		container.append(resultNumber)
	} catch (error) {
		console.log(error)
	}
}

const drawnAgain = () => {
	const button = document.createElement("button")
	button.innerHTML = `
            Sortear novamente
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
                class="outside"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 2.75C6.89136 2.75 2.75 6.89136 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.5858 21.5858 11.25 22 11.25C22.4142 11.25 22.75 11.5858 22.75 12C22.75 17.937 17.937 22.75 12 22.75C6.06293 22.75 1.25 17.937 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C14.7937 1.25 17.339 2.31639 19.25 4.06269V2.5C19.25 2.08579 19.5858 1.75 20 1.75C20.4142 1.75 20.75 2.08579 20.75 2.5V6C20.75 6.41421 20.4142 6.75 20 6.75H16.5C16.0858 6.75 15.75 6.41421 15.75 6C15.75 5.58579 16.0858 5.25 16.5 5.25H18.3246C16.6699 3.69872 14.446 2.75 12 2.75Z"
								fill="white"
							/>
							<path
								d="M15.9453 12.3577C15.7686 12.9844 14.9333 13.4273 13.2629 14.3131C11.648 15.1693 10.8406 15.5975 10.1899 15.4254C9.9209 15.3542 9.6758 15.2191 9.47812 15.0329C9 14.5827 9 13.7094 9 11.9629C9 10.2163 9 9.34307 9.47812 8.89284C9.6758 8.7067 9.9209 8.57157 10.1899 8.50042C10.8406 8.32833 11.648 8.75646 13.2629 9.61272C14.9333 10.4985 15.7686 10.9414 15.9453 11.5681C16.0182 11.8268 16.0182 12.099 15.9453 12.3577Z"
								stroke="white"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
  `

	const result = document.getElementById("result")
	result.append(button)

	button.onclick = () => {
		window.location.reload()
	}
}
