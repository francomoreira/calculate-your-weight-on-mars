var usuario = prompt('cual es tu peso?')
var peso = parseInt(usuario);
var gTierra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;
var pesoFinal;
pesoFinal = usuario * gMarte / gTierra;
pesoFinal = parseInt(pesoFinal);
document.write('Tu peso en marte es de: <strong>' +pesoFinal+' Kg.</strong>');