const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}
async function Program() {
    //welcome message
    console.log("Welcome to my Calculator")
    while (true) {
        // List options
        console.log("[1] Add Numbers");
        console.log("[2] Subtract Numbers");
        console.log("[3] Multiply Numbers");
        console.log("[4] Exit");
        //ask user to enter an option
        let userInput = await askQuestion("Select an option from above: ")
        console.log();
        //choose an option based on user input
        if (userInput == "1") {
            //add numbers logic
            console.log("You have selected the Add Numbers function")
            let userInput1 = await askQuestion("Enter your first number: ")
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter your second number: ")
            let num2 = parseInt(userInput2);
            console.log(`${userInput1} plus ${userInput2} equals ${num1 + num2}`);
        } else if (userInput == "2") {
            //subtract numbers logic
            console.log("You have selected the Subtract Numbers function")
            let userInput1 = await askQuestion("Enter your first number: ")
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter your second number: ")
            let num2 = parseInt(userInput2);
            console.log(`the difference between ${userInput1} and ${userInput2} equals ${num1 - num2}`);
        } else if (userInput == "3") {
            //multiply numbers logic
            console.log("You have selected the Multiply Numbers function")
            let userInput1 = await askQuestion("Enter your first number: ")
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter your second number: ")
            let num2 = parseInt(userInput2);
            console.log(`the product of ${userInput1} and ${userInput2} is ${num1 * num2}`);

        } else if (userInput == "4") {
            //multiply numbers logic
            break;
            //exit
        } else {
            console.log("Sorry, I could not determine your input, please try again.");
        }
        console.log();
    }
    console.log("Thank you for using my calculator");
    console.log();


}//your code should not go past here. 


Program().then(() => {
    process.exit(0);
});
