// Decorators are a new feature of TypeScript and used throughout the Angular code, 
//with decorators we can configure and customise our classes at design time. 
//They are just functions that can be used to add meta-data, properties or functions to the thing they are attached to.


function Student(config) {
  return function (target) {
    Object.defineProperty(target.prototype, 'course', { value: () => config.course })
  }
}



@Student({
  course: "angular7"
})
class Person {
  constructor(private firstName, private lastName) {
  }

  public name() {
    return `${this.firstName} ${this.lastName}`;
  }

  protected whoAreYou() {
    return `Hi i'm ${this.name()}`;
  }
}

let p = new Person("John", "Doe");
//noinspection TypeScriptUnresolvedFunction
console.log(p.course());
