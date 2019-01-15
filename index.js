/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
    species: 'dog',
    name: 'Toby',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Hello world!'
};

const cat = {
    species: 'cat',
    name: 'Tom',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Hello world!'
};

const woman = {
    species: 'humans',
    name: 'Rita',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'Hello world!'
}

const man = {
    species: 'humans',
    name: 'Anton',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: 'Hello world!'
}

function printObject (object){

    if (object.hands === 0){
        delete object.hands;
    }
    return Object.values(object).map(function(k){return k}).join(";");
}
print(printObject(dog), 'div');
print(printObject(cat), 'div');
print(printObject(man), 'div');
print(printObject(woman), 'div');

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


