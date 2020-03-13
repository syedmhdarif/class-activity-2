import readline from 'readline';
import {Student} from './import.mjs';

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});

rl.question('PLease enter your name:', (input2) =>{
    rl.question('please enter your matric num: ', (input3) =>{
        rl.question('please enter your major: ', (input4) =>{

            let x = new Student(input2, input3, input4);

    x.display();
    rl.close();
        })
    })
});