import { Container } from "./";

let container  = new Container();
const point = {x:10, y:10};

class Car{}
class House{}
class GirlFriend{
  constructor(private car: Car, private house: House){}
}

container.addProvider({ provide: House, useFactory : ()=>new House() });
container.addProvider({ provide: Car, useValue: new Car() });
container.addProvider({ provide: GirlFriend, useClass: GirlFriend });
console.log(container.providers)

// inject注入， 就是根据token创建对应的实例
let car =  container.inject(Car);