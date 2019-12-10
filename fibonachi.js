let fCur = 1;
let fPrev = 1;
let arrayFib = [];
let convertedArray = [];

let countArray = 200;

let form = document.forms.my;
let numberInput = form.elements.numberInput;
let num;



function fibbon(n){
	
	arrayFib.push(fCur);
	
	for (let i = 0; i < n-1; i++){
		
		fCur = fCur + fPrev;
		fPrev = fCur - fPrev;
		arrayFib.push(fCur);
	}
	console.log(arrayFib);

}

function createConvertedArray(n){
	
	convertedArray = [];
	for (let i = 0; i < n; i++){
		
		convertedArray.push(0);
	}
	console.log(convertedArray);

}
fibbon(countArray);


function checkFibbon(){

	createConvertedArray(countArray);

	let yourNumber = num;
	let k = 1;
	console.log(arrayFib[arrayFib.length - k]);
	console.log(num);



	for (let i = 0; (( num > 0) && (i < countArray)) ; i++){
		
		if (arrayFib[arrayFib.length - k] <= num) {
			num = num - arrayFib[arrayFib.length - k] 
			convertedArray[convertedArray.length - k] = 1
		}
		
		console.log(convertedArray);
		console.log(num);
		k++;
	}

	if (num == 0) {
		while (convertedArray[convertedArray.length -1] == 0){
			convertedArray.pop();
		}
	}
	console.log(convertedArray);

	convertedArray.reverse()
	console.log(convertedArray);
}

numberInput.oninput = function(){
	num = numberInput.value;
	checkFibbon();
	document.getElementById("fib").innerText = convertedArray.join('');
}







