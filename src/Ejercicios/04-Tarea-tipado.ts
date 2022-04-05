
/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => void;
}

// Creem una altre interface si tenim un atribut que es objecte
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'New York'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

