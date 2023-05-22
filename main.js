let listaContacto = [
    {id: 10, nombre:"Lionel", apellido:"Messi", telefono:"+34 634493430", ubicacion:{ciudad:"Barcelona", direccion:"Av Las palmas real"}},
    {id: 7, nombre:"Cristiano", apellido:"Ronaldo", telefono:"+351 210457462", ubicacion:{ciudad:"Lisboa", direccion:"Rf Villou le porteu 33"}},
    {id: 17, nombre:"Eden", apellido:"Hazard", telefono:"+32 7506894104", ubicacion:{ciudad:"Bruselas", direccion:"Rue Royale, 1000 Bruxelles"}},
    {id: 21, nombre:"Killiam", apellido:"Mbappe", telefono:"+33 5567880344", ubicacion:{ciudad:"Paris", direccion:"Notre Dame des Champs 75006 Parí"}}
];

console.log(listaContacto);

function nuevoContacto (id,nombre,apellido,telefono,ubicacion){
    let contacto = {
        id: id || null,
        nombre: nombre || null,
        apellido: apellido || null,
        telefono: telefono || null,
        ubicacion: ubicacion || null,
    };
    console.log(`Se agrego el contacto  "${nombre}" correctamente.`);

    listaContacto.push(contacto);
}

function actualizaContacto(nombre, propiedad, nuevoValor) {
    let contacto = listaContacto.find(contacto => contacto.nombre === nombre);

    if (contacto) {
      contacto[propiedad] = nuevoValor;
      console.log(`Se ha cambiado "${propiedad}" del contacto "${nombre}" satisfactoriamente.`);
    } else {
      console.log(`No se encontró ningún contacto con el nombre "${nombre}".`);
    }
  }

function borraContacto(nombre) {
    const position = listaContacto.findIndex(contacto => contacto.nombre === nombre);

    if (position !== -1) {
      listaContacto.splice(position, 1);
      console.log(`Se elimino "${nombre}" el contacto correctamente.`);
    } else {
      console.log(`No se encontró ningún contacto con el nombre "${nombre}".`);
    }
  }

function imprimir (){
    console.log(listaContacto);
}


nuevoContacto(15,"Xavi","Alonso","+20 4448484","Madrid","Avenida Vuelta roja 78 00");
nuevoContacto(11,"Zinedine","Zidane","+33 8749117434","Monco","La plce Maite 10 22");
imprimir();

actualizaContacto("Lionel", "id", 32);
actualizaContacto("Cristiano","apellido", "CR7");
imprimir();

borraContacto("Eden")
borraContacto("Cristiano")
imprimir();