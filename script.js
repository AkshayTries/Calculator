// // document.write("Hello there")
// var name = window.prompt("Enter your name ");
// document.write(name+" is a great name my man");
var n1 ="";
var perm_n1;
var perm_n2;
var symbol;
function run(element1)
{
	i = element1.id;
	var n = document.getElementById(i).innerHTML;
	n1+=n;

}

function enter(element2)
{
	perm_n1 = n1;
	n1="";
	symbol = String(element2.innerHTML);
}

function ans(element3)
{
	perm_n2 = n1;
	if (symbol=="+")
	{
		document.write(parseInt(perm_n1)+parseInt(perm_n2));
	}
	else if(symbol=="-")
	{
		document.write(parseInt(perm_n1)-parseInt(perm_n2));

	}
	else if(symbol=="*")
	{
		document.write(parseInt(perm_n1)*parseInt(perm_n2));

	}
	else if(symbol=="/")
	{
		document.write(parseInt(perm_n1)/parseInt(perm_n2));

	}

}