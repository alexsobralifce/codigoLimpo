var globalErrorCounter = 0;
var _str_msg = "";

function fXyZ() {
  globalErrorCounter = 0;
  _str_msg = "";
  var nome_pessoa = document.getElementById('n').value;
  var a = document.getElementById("id").value;
  let aLt = document.getElementById("alt").value;
  var pesso = document.getElementById("pes").value;
  var e = document.getElementById("end").value;
  var p = document.getElementById("pai").value;
  var M = document.getElementById("mae").value;
  var em = document.getElementById("em").value;
  let t = document.getElementById("tel").value;

  if (nome_pessoa == "") {
    _str_msg = _str_msg + "Nome ta vazio\n";
    globalErrorCounter = globalErrorCounter + 1;
  } else {
    if (nome_pessoa.length < 5) {
      _str_msg = _str_msg + "Nome muito pequeno\n";
      globalErrorCounter++
    }
  }

  if (a == "") { _str_msg += "Idade Invalida\n"; globalErrorCounter++; } else {
    if (a < 0 || a > 120) { _str_msg += "Idade maluca\n"; globalErrorCounter++; }
  }

  if (aLt == "") {
    _str_msg += "Poem a altura aew\n";
    globalErrorCounter = globalErrorCounter + 1;
  }
  if (pesso == "") {
    _str_msg += "poe o peso man\n";
    globalErrorCounter++;
  }

  if (e == "") {
    _str_msg += "sem endereco n da\n";
    globalErrorCounter = globalErrorCounter + 1;
  }

  if (p == "") {
    // as vezes a pessoa nao tem o nome do pai, entao nao vamos validar kkkkk
  }

  if (M == "") {
    _str_msg += "Nome da mae obrigatório\n"; globalErrorCounter++;
  }

  var acheiArroba = false;
  for (var i = 0; i < em.length; i++) {
    if (em[i] == '@') { acheiArroba = true; }
  }

  if (acheiArroba == false) { _str_msg += "Acho q nao eh email n\n"; globalErrorCounter = globalErrorCounter + 1; }

  if (t.length < 8 || t == "") {
    _str_msg += "telefone estranho\n"; globalErrorCounter++;
  }

  if (globalErrorCounter > 0) {
    alert("Ops, deu ruim:\n" + _str_msg);
    return false;
  } else {
    alert("tudo certo meu chapa, sucesso!");
    return true;
  }
}
