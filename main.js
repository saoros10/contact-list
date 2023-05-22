let listaContacto = ["Lionel Messi","Cristiano Ronaldo","Eden Hazard","Killiam Mbappe"];

console.log(listaContacto);

function nuevoContacto (nombre){
    listaContacto.push(nombre);
}

function borraContacto (nombre){
    let position = listaContacto.indexOf(nombre);
    listaContacto.splice(position,1);
}

function imprimir (){
    console.log(listaContacto);
}

nuevoContacto("Ronaldinho ElMagico");
nuevoContacto("Ronaldo ElFenomeno");
borraContacto("Eden Hazard");
imprimir();
