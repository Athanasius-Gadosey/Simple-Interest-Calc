function calculator(){
	// declaring variables first
	let p=0; //Principal
	let yr=0; //Years
	let r=0; //Rate
	let SI=0; //Simple Interest

	// am trying convert all string input into integers
	p = parseInt(document.getElementById('principal').value);
	yr = parseInt(document.getElementById('year').value);
	r = parseInt(document.getElementById('rate').value);

	SI = (p*yr*r)/100;

	document.getElementById('balance').innerHTML=SI;

}