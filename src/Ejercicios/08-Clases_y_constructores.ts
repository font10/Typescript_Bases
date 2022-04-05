class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}


class Heroe extends PersonaNormal{
    /*
        private: solo visible en esta clase
        public: visible fuera de la clase
        static: puedo acceder a los metodos o propiedades sin instancia
    */

    // Constructor --> funcion se llama al crear una instancia de la clase
    // Creamos los atributos y assignamos argumentos en el constructor al mismo tiempo
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        // llama al constructor de la clase extiendes (PersonaNormal)
        super(nombreReal, 'New York, USA');
    }

}

// Instancia de la clase
const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);