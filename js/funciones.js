let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
var excusa;

function MyExcuse()
{
var x = getRandomInt(0, (who.length -1));
var y = getRandomInt(0, (what.length -1));
var z = getRandomInt(0, (when.length -1));
excusa = who[x] + " " + what[y] + " " + when[z];
document.getElementById("excuse").innerHTML = excusa;
}

function getRandomInt(a, b)
{
	var randomNumber = Math.floor((Math.random() * b) + a);
	return randomNumber;
}