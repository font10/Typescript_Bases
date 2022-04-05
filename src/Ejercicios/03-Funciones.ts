
/*
    ===== Código de TypeScript =====
*/

// Funciones

// Especifiquem que els valors rebem han de ser number i retorna un numero :number
function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar( numero: number, base: number = 2, otroNumero?: number): number {
    return numero * base;
}

// Regles estrictes per el personajeLOR
interface PersonajeLOR {
    nombre: string;
    pv: number;
    // Indiquem que mostrarPV es una funcio
    mostrarPV: () => void;
}

// Void pq no te return
function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

// Creem un objecte de tipus PersonajeLOR
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Satan',
    pv: 50,
    mostrarPV() {
        console.log('PV: ', this.pv);
    }
}

// Curem el personaje
curar( nuevoPersonaje, 30);
nuevoPersonaje.mostrarPV();

const resultado = multiplicar(5, 3);
console.log(resultado);

