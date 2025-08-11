let Amigos = [];

// se agrega funcion para cambiar texto al h1 
function textoReutilizar(elemento, texto){
  let TextoReutilizable =  document.querySelector(elemento);
  TextoReutilizable.innerHTML = texto;
}

//se agregan datos al array
function agregarAmigo(){
 let panita = document.getElementById('amigo').value;
 let panamax = panita;
if (panamax === "") {
     alert("error, ingresa un dato valido");
        return;
 
        }
        if (Amigos.includes(panamax)) {

            alert("Ya se ha agregado este amigo");
            return;
        } else {

        Amigos.push(panamax);
        ordenarAmigos();
        borrarTexto();
        console.log(Amigos);
        return;
    }
}
// donde se ordenan y muestran amigos en la pagina
function ordenarAmigos() {
   let amigosOrdenados = document.getElementById("listaAmigos");
      amigosOrdenados.innerHTML = "";
    for (let lol = 0; lol < Amigos.length; lol++) {
        let amigoOrdenaditos = document.createElement("li");
        amigoOrdenaditos.textContent = Amigos[lol];
        amigosOrdenados.appendChild(amigoOrdenaditos);
    }
    return amigosOrdenados;
}

//donde se escoje subaleatoriamente que amigo salio sorteado
function sortearAmigo() {
    if (Amigos.length < 3) {
        alert("Debe ingresar al menos 3 amigos para realizar el sorteo.");
        return;
    }
    let amigosSorteo = Math.floor(Math.random() * Amigos.length);
    let amigoResultado = Amigos[amigosSorteo];
    console.log(amigosSorteo);
    console.log("El amigo sorteado es: " + amigoResultado);
    textoReutilizar('h2', `EL SORTEADO ES ${amigoResultado}`);
    alert("El amigo sorteado es: " + amigoResultado);
    borrarLista();
    return amigoResultado;

}
// se borra el contenido del input
 function borrarTexto() {
    document.getElementById('amigo').value = "";

 }
  // se borra el contenido de la lista
 function borrarLista() {
    Amigos = [];
 }


