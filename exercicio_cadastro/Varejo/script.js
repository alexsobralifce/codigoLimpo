var cl = []; var pr = []; var fo = [];

// atualiza tela (tudo de uma vez)
function z() {
  document.getElementById("v1").innerHTML = cl;
  document.getElementById("v2").innerHTML = pr;
  document.getElementById("v3").innerHTML = fo;
}

// cad cliente
function a() {
  var x = document.getElementById("c_n").value;
  var y = document.getElementById("c_d").value;
  cl.push(" " + x + "-" + y);
  z();
}

// cad produto
function b() {
  var n = document.getElementById("p_n").value;
  var v = document.getElementById("p_v").value;
  pr.push(" " + n + " R$" + v);
  z();
}

// cad fornecedor
function c() {
  var n = document.getElementById("f_n").value;
  fo.push(" " + n);
  z();
}