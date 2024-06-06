// let comision = 70065;

// console.log(comision);

// function suma(a, b) {
//     // calculo, validacion
//     a + b
// }

// const restar = (a, b) => a - b;

//funcion anonima

// const saludar = function (nombre) {
//   console.log("Hola, " + nombre + "!");
// };

// saludar("Facu");

// CLASES

// Atributos = Características
// Métodos = Acciones

// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   saludar() {
//     console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
//   }
// }

// let persona1 = new Persona("Nicolás", 33);

// persona1.saludar();

class Contador {
  static cuentaGlobal = 0;

  constructor(responsable) {
    this.responsable = responsable;
    this.cuentaIndividual = 0;
  }

  getResponsable() {
    return this.responsable;
  }

  getCuentaIndividual() {
    return this.cuentaIndividual;
  }

  static getCuentaGlobal() {
    return Contador.cuentaGlobal;
  }

  contar() {
    this.cuentaIndividual++;
    Contador.cuentaGlobal++;
  }
}

const contador1 = new Contador("Nicolás");
contador1.contar();
contador1.contar();
contador1.contar();
contador1.contar();

console.log(contador1.getCuentaIndividual());

console.log(Contador.getCuentaGlobal());
