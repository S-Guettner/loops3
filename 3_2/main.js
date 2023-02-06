let numArr = [5, 22, 15, 100, 55]

for (let i = 0; i < numArr.length; i++) {
	
	for (let n = 2; n < numArr[i]; n++) {
	
		if (numArr[i] % n === 0) {
			let output  = numArr[i] / n
			document.write(
				`${numArr[i]} lässt sich durch ${n} teilen. Das Ergebnis ist ${output}.<br>`
			)
		}
	}
}