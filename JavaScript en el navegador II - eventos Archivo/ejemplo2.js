function myFunction(){
	let number = Math.random();
	this.innerText = new String(number);
}
document.getElementById('floatPar').addEventListener('click',myFunction);
document.getElementById('floatPar').addEventListener('click',()=>alert("Yo también molo!"));
document.getElementById('molona').addEventListener('click',()=>alert("Soy muy molon"));
