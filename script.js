var usuario = prompt('cual es tu peso?');
var planeta = parseInt(prompt('Elige tu planeta \n (1) es marte, (2) es jupiter'));
var peso = parseInt(usuario);
var gTierra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;
var pesoFinal;
if(planeta == 1)
{
    pesoFinal = usuario * gMarte / gTierra;
    pesoFinal = parseInt(pesoFinal);
}
else if(planeta == 2)
{
    pesoFinal = usuario * gJupiter / gTierra;
    pesoFinal = parseInt(pesoFinal);
}

if(planeta == 1)
{
    document.write('Tu peso en marte es de: <strong>' +pesoFinal+' Kg.</strong>')
}
else if(planeta ==2)
{
    document.write('Tu peso en júpiter es de: <strong>' +pesoFinal+' Kg.</strong>')
}
else
{
    document.write('Lo siento tu respuesta no es válida 👽')
}
