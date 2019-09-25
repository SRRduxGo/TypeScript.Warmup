const tpy = {
  type: "kim",
  age: 20,
  employer: {
    company: "micro",
    salary: "60-lakhs"
  },
  setAge(age: number): void {
    this.age = age;
  }
};

/**
 * now lets de-structure
 * we are in a way defining the TYPE  of `de-structured Structure`
 * `{ employer: { company: string; salary: string } }`
 */

const { age }: { age: number } = tpy;
let { employer }: { employer: { company: string; salary: string } } = tpy;
