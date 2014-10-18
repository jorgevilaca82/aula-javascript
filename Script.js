function somar() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var resultado = parseInt(x) + parseInt(y);
    document.getElementById("resultado").innerHTML = resultado;
}

document.getElementById("btnSomar").onclick = somar;