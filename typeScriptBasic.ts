// type inference
let myName = "jobayer majumder";

//type enotation
const myName1: string = "jobayer majumder";
let age: number; // number variable
age = 12;
const isUpdated: boolean = true;// Boolean variable
let year: number = 1998;
year = 78;

//union type
type StringOrNumber = number | string;
let studentId: StringOrNumber = 344304;
studentId = 'web4-344304'
studentId = 122323;


//type alias
type direction = 'left' | 'right' | 'top' | 'bottom';
let gameDirection: direction = "right"

type Man = {
    name: string;
    age: number;
};
type PersonType = { age: number, name: string, hobby: string };


//interface with Optional Properties
interface Person {
    name: string;
    location: string;
    employee?: number;
}

let person: Person = {
    name: "softlab",
    location: 'mirpur',
    employee: 25
}

let person2: Person = {
    name: "softlab",
    location: 'mirpur',
}

//  Array 
const numbers: (number | string)[] = [33, 40, 50, 80, 'stefjhj'];
const persons: Person[] = [
    {
        name: "softlab",
        location: 'mirpur',
        employee: 25
    },
    {
        name: "softlab",
        location: 'mirpur',
        employee: 25
    }
];


// function without return
const greeting = (name: string): void => {
    console.log(`Hello ${name}`)
}
greeting("Shadin")

//function with return
const add = (a: number, b: number): number => {
    return a + b
}

const introduce = ({ name, location }: Person): void => {
    console.log(`Hello, my name is  ${name}, And I'm in ${location}!`)
}

introduce({
    name: "softlab",
    location: 'mirpur',
    employee: 25
},)


const getArray = <T>(arr: T[]): T[] => {
    return arr
}

getArray<string>(['softlab', 'lab']);
getArray<number>([1, 2, 43, 4]);

// enum

enum Week {
    Sat = 'SAT',
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thr = "THR",
    Fri = "FRI"
}

console.log(Week.Sat)