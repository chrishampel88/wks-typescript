//tipado inferido
let mati = {
    nombre: 'Matias',
    edad: 29
}

//tipado explicito?

interface Persona {
    nombre: string;
    edad: number
}

let franco: Persona = {
    nombre: "Franco",
    edad: 27
}

interface Estudiante extends Persona {
    esActivo?: boolean
}

let diego: Estudiante = {
    nombre: "Diego",
    edad: 29,
    //esActivo: false //que pasa si comento alguno?
    //SE QUEJA XQ TE LO ESTA PIDIENDO OBLIGATORIAMENTE A MENOS Q USES ?
}

// Investiga la palabra reservada implements

//LA NUEVA CLASE PUEDE TRATARSE CON LA MISMA FORMA PERO NO ES UN HIJO DE LA ANTERIOR

// Existe otra alternativa para realizar lo mismo?
// Si, types.


type Person = {
    name: string,
    age: number
}

type Student = Person & {
    isActive: boolean;
}

let Fede: Student = {
    name: 'Fede',
    age: 29,
    isActive: false
}

//Investiga sus diferencias
//          Type	                                                Interface
//Es una colección de tipos de datos.	                                 Es una forma de sintaxis.
//Admite la creación de un nuevo nombre para un tipo.                   Proporciona una forma de definir las entidades.
//Tiene comparativamente menos capacidades.	                            Tiene comparativamente más capacidades.
//No admite el uso de un objeto.	                                    Es compatible con el uso de un objeto.
//No se pueden usar varias declaraciones fusionadas.	                Se pueden usar múltiples declaraciones fusionadas.
//Dos tipos que tienen el mismo nombre provocan una excepción.	        Dos interfaces que tienen el mismo nombre se fusionan.
//No tiene propósitos de implementación.	                            Tiene un propósito de implementación.gi
export {}