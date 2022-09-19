/*

let isSet: boolean= false;
isSet = true;

let decimal: number = 6;
let hex: number = 0xff0000; // colocar o 0x para indicar hexadec
let binary: number = 0b010101;//colocar o 0b para binary

let color: string = 'blue';
color = 'red';

let list: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

let user: [string, number];
user = ["Glaucia", 1]

let State = 'inactive' | 'active' |'destack' //estados

//Alias - atalho- usuário específico/ passar como tipo
type User = {
    name: string;
    age: number;
    id: number;
    city: string;

}

let user1: User;

type pet = 'dog' | 'cat';

let pet: pet = 'dog';
let pet2: pet = 'cat'*/
function sum(n1, n2) {
    var v1 = typeof n1 === 'string' ? +n1 : n1;
    var v2 = typeof n2 === 'string' ? +n2 : n2;
    console.log(v1 + v2);
}
sum(20, '20');
sum(50, "50");
sum("10", "10");
