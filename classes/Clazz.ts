class Vehicle_ {
  color_: string = "blue";
  //or
  /*constructor(color: string) {
    this.color = color;
  }*/
  //or
  constructor(public color: string) {}
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

/** extend the class */

class Car_ extends Vehicle_ {
  constructor(public color: string) {
    super(color + "..");
  }
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

let car_ = new Car_("green");
console.log(car_.color);
console.log(car_["__proto__"].color);
