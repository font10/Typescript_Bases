
// GENERICOS

// T es un generico para recibir cualquier tipo de datos
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 2, 3, 4]);
// Especifiquem el tipus de dades <number>
let soyExplicito = queTipoSoy<number>(100);