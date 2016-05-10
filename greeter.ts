/*

For more information, go to https://www.typescriptlang.org/docs/tutorial.html

npm install -g typescript
tsc greeter.ts (This will compile greeter.ts to .js)
tsc --watch greeter.ts (This will watch the file and transpile on save)

: string is a type annotation, used to say what the intended type is
of a variable

TS        | C#
----------|-----------
namespace | namespace
module    | think of these like class libraries
class     | class
interface | interface
gernerics |

*/

module Greetings {
    // export lets us use it outside of scope of module
    export class Student {
        fullName: string;

        /* the use of public on arguments to the constructor is a shorthand
        that allows us to automatically create properties with that name */
        constructor(public firstName: string, public lastName: string) {
            // we must use this so we do not reference global variables
            this.fullName = firstName + " " + lastName;
        }
    }

    interface IPerson {
        firstName: string;
        lastName: string;
    }

    /*
        Function takes an IPerson and returns a string, if we left out specifying the
        it would be infered as the method does return a string
    */
    function greeter(person: IPerson): string {
        return `Hello, ${person.firstName} ${person.lastName}`;
    }

    /* 
        As long as this has the same properties as IPerson, it can be treated as such.
        This is called "structural typing" as the type is infered from it's structure.
    */
    var user = { firstName: "Jane", lastName: "Doe" };

    var joe = new Student("Joe", "Doe");
    // because we used pulic on the constructor we can get the properties
    var fname = joe.firstName;
    var lname = joe.lastName;

    // Replace the body of the HTML page
    document.body.innerHTML = greeter(user) + ` and ${fname} ${lname}`;
}

// need to fully qualify as we are not in the scope of Greetings
var student = new Greetings.Student("Matthew", "Padden");

class Types {
    anyType: any; // This can be any type, similar to dynamic in c#
    stringType: string;
    numberType: number;

    // This is using an optional parameter
    hello(param?: string) {
        if (param === "")
            param = "NAME";

        return `Hello ${param}`;
    }
}

var types = new Types();
types.hello();
types.hello("Matthew");