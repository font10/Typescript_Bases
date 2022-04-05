// Creem un interface per mantenir unes regles en el objecte
export interface Producto {
    desc: string;
    precio: number;
}

// Creem objecte telefono
const telefono: Producto = {
    desc: 'Nokia',
    precio: 150
}

// Creem objecte tablet
const tablet: Producto = {
    desc: 'Ipad Air',
    precio: 350
}

// CalculaISV, passem productes tipo producto y surt una array de dos numeros
export function calculaISV( productos: Producto[]): [number, number] {
    let total = 0;

    // Recorrem objecte productos
    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return [total, total * 0.15];
}

// Array de productes
/*const articulos = [ telefono, tablet ];

// Desestructurem per aconseguir total i isv de la funcio calculaISV
const [ total, isv ] =  calculaISV(articulos);

console.log('Total: ', total)
console.log('ISV: ', isv) */