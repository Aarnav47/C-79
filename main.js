a=[];

function arr() {
    var b=document.getElementById("i1").value; 
    var c=document.getElementById("i2").value;
    var d=document.getElementById("i3").value;
    var e=document.getElementById("i4").value;
    a.push(b);
    a.push(c);
    a.push(d);
    a.push(e);
    console.log(a);
    document.getElementById("d1").innerHTML=a;
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="inline-block";
}

function sor() {
    a.sort();
    console.log(a);
    document.getElementById("d1").innerHTML=a;
}