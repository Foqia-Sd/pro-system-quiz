import inquirer from "inquirer";
let student_name = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "First Enter Your Name"
    }
]);
let quiz = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: "What is the command to create tsconfig file in Typescript?",
        choices: ['npm init -y', 'tsc --init', 'npm i inquirer',]
    },
    {
        name: "q2",
        type: "list",
        message: "Why we use pop method in an array?",
        choices: ['To remove first element', 'To add in last element', 'To remove last element',]
    },
    {
        name: "q3",
        type: "list",
        message: "Why we use shift method in an array?",
        choices: ['To remove first element', 'To add element in middle', 'To remove last element',]
    },
    {
        name: "q4",
        type: "list",
        message: "Why we use unshift method in array?",
        choices: ['To add first element', 'To add last element', 'To remove last element',]
    },
    {
        name: "q5",
        type: "list",
        message: "Why we use push method in array?",
        choices: ['To remove first element', 'To add last element', 'To cut from middle element',]
    }
]);
let score = 0;
switch (quiz.q1) {
    case "tsc --init":
        console.log("1. Correct Answer");
        ++score;
        break;
    default:
        console.log("1. Incorrect Answer");
}
switch (quiz.q2) {
    case "To remove last element":
        console.log("2. Correct Answer");
        ++score;
        break;
    default:
        console.log("2. Incorrect Answer");
}
switch (quiz.q3) {
    case "To remove first element":
        console.log("3. Correct Answer");
        ++score;
        break;
    default:
        console.log("3. Incorrect Answer");
}
switch (quiz.q4) {
    case "To add first element":
        console.log("4. Correct Answer");
        ++score;
        break;
    default:
        console.log("4. Incorrect Answer");
}
switch (quiz.q5) {
    case "To add last element":
        console.log("5. Correct Answer");
        ++score;
        break;
    default:
        console.log("5. Incorrect Answer");
}
if (score === 5) {
    console.log(`Congratulations! ${student_name.name} your score is ${score} you win quiz`);
}
else {
    console.log(`${student_name.name} Keep practicing to improve and to get 100% score in quiz`);
}
