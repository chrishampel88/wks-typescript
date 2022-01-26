class Person {
    name: string;
    age: number;
    //private mail: string;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Student extends Person {
  regular: boolean;
    
    constructor(name: string, age: number, regular: boolean) {
      super(name, age);
      this.regular = regular;
    }
    
    getFullInfo() {
      return `${this.name} (${this.age} years old) - ${this.regular ? 'regular' : 'not regular'}`;
    }
  }
  
  const student = new Student("Franco", 26, true);
  
  student.getFullInfo(); // "Franco (26 years old) - not regular"
  student.name; // Property 'name' is protected and only accessible within class 'Person' and its subclasses
  student.age; // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
  student.regular; // Property 'regular' is private and only accessible within class 'Student'

//proba como cambiar los modificadores de atributos de la clase!

// si no tiene nada es publico y puede ser llamad en cualquier lado
//si es protected puede ser llamad dentro de su clase o sus hijos
//si es privated puede ser llamado unicamente en donde fue definido
  export {}