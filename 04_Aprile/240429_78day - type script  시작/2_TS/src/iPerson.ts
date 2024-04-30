interface IPerson4 {
  name: string;
  age?: number;
}

// class Person4 implements IPerson4 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class Person4 implements IPerson4 {
  constructor(public name: string, public age: number) {}
}

let jack4: IPerson4 = new Person4("jack", 20);

console.log(jack4); // Person4 { name: 'jack', age: 20 }
