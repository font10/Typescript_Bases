
/*
    ===== Código de TypeScript =====
*/

// Arrays objetos interfaces

// Array de tipus string
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

// Claus objectes perque siguin com nosaltres volem
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    // ? posem que sigui opcional puebloNatal
    puebloNatal?: string;
}

// Al objecte personaje, li posem les regles del interface que ha de seguir l'objecte
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

// Afegim un valor a l'atribut puebloNatal
personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);


