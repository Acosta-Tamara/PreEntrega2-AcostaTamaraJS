function Cliente(nombre,edad) {
    this.nombre = nombre;
    this.edad = edad;
    let dni = "39154635";

    this.getDni = function() {
        return dni;
    }

    this.saludar = function(){
        console.log("Buen dia, soy" + nombre + " tengo " + edad + "años mi dni es" + this.getDni() );
    }
}

let objetoCliente = new Cliente("Tamara Acosta", 29);
let objCliente = new Cliente("Mariel Acosta", 35);

objetoCliente.saludar();
objCliente.saludar();
