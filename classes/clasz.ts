class Vehicle {
  color: string = "blue";
  public drive(): void {
    console.log("self driving");
  }
  public honk(): void {
    console.log("just buzz off!");
  }
  protected sos(): void {
    console.log("sent sos");
  }
}

/** using class name as the type : TS interprets it as an interface */
let v: Vehicle = new Vehicle();
v = new Number();
/** A new object will work */
v = {
  drive(): void {
    console.log("self driving");
  },
  honk(): void {
    console.log("just buzz off!");
  }
};

/** extend the class */

class Car extends Vehicle {
  public drive(): void {
    console.log("kzoom!");
  }

  public sendsos(): void {
    this.sos();
  }

  private chasisNumber(): number {
    return 1236560900910;
  }
}

let car = new Car();
car.sos();
car.sendsos();
car.chasisNumber();
