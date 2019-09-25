const car = {
  make: "honda",
  engine: 500,
  year: 2020,
  broken: true
};
const foo = (car: { make: string; engine: number; year: number }) => {
  console.log(car);
};
foo(car);
// TS couldnt detect
car["x"] = 209;
// Ts could detect
//car.martha = "spidy";

foo(car);

/**
 * Creating the interface for the same
 */
interface Vehicle {
  make: string;
  engine: number;
  year: number;
}

/**Duplicate interface with twis-ch */
interface Vehicle_ {
  make: string;
  engine: number;
  year: Date;
  summary: () => string; // ways to annotate a function
  summer(): number; // ways to annotate a function
}

const foo_ = (car: Vehicle_) => {
  console.log(car);
};
const car_ = {
  make: "honda",
  engine: 500,
  year: new Date(),
  broken: true,
  summary(): string {
    return this.make + this.engine + this.year + this.broken;
  },
  summer: () => 1
};
foo_(car_);
console.log(car_.summary());

const v: Vehicle | Vehicle_ = car_;
