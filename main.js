var p = prompt("enter your numbers between (-) ")
var x=p.indexOf("-")
var fn=Number(p.slice(0,x))
var sn=Number(p.slice(x+1))
if(x===-1){
    alert("please enter your number between(-)")
   location.reload();
}
if(fn>sn){
    var empty=fn
    fn=sn
    sn=empty
}
for(var i=fn;i<=sn;i++)
{
    document.writeln(i+`<br>`)
}

