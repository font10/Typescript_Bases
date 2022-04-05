/* ENCADAMIENTO OPCIONAL */

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'David'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimirHijos(pasajero: Pasajero): void {
    // Intente buscar si tiene hijos, sino return sea undefined || return 0
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos)
}

imprimirHijos(pasajero2);