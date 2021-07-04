var valores    = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];
var qtdValores =  valores.length;

console.log(valores);
console.log(qtdValores);

function busca(num){
	var passos = 0;
	for(i=0; i <= qtdValores; i++) {
		passos = passos + 1;
		if (num == valores[i]) {
			console.log("Encontrou em "+ passos+" passos");
			return i
		}
	}  
	console.log("Não Encontrou em "+ passos+" passos");
	return -1
}

function buscaBin(num) {
	let inicio, meio, fim;
	inicio = 0;
	fim = qtdValores - 1;
	let passos = 0;

	while( inicio <= fim) {
		meio = parseInt((inicio + fim) / 2)
		passos = passos + 1;
		if (num == valores[meio]) {
			console.log("Encontrou em "+ passos+" passos");
			return meio;
		} else{
			if (num > valores[meio]) {
				inicio = meio + 1
			} else {
				fim = meio - 1
			}
		}
	}
	console.log("Não Encontrou em "+ passos+" passos");
	return -1;
}


console.log('Buscando...')
console.log(busca(60))
console.log(busca(62))

console.log('Busca Binaria...')
console.log(buscaBin(60))
console.log(buscaBin(62))

