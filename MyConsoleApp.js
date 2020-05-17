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
    // Your Code Goes Here...
    //the data used
    let races = {
        race1: ["Jack", "Christian", "Karina", "David"],
        race2: ["Christian", "David", "Luke", "Jack"],
        race3: ["Luke", "Karina", "Jack", "Christian"],
        race4: ["Karina", "Luke", "Jack", "David"],
        race5: ["David", "Christian", "Karina", "Luke"]
    };
    //   console.log(races.length);

    //searchRace searches the race entered to make sure the name is in it
    function searchRace(race, name) {
        let hasName = false;
        if (hasName != race.includes(name)) {
            return true;
        } else {
            return false;
        }
    }
    //position, finds the position of the runner and tells you where they came
    function position(race, name) {
        if (race.indexOf(name) == 0) {
            console.log(name + " came first in the race.");
        } else if (race.indexOf(name) == 1) {
            console.log(name + " came second in the race.");
        } else if (race.indexOf(name) == 2) {
            console.log(name + " came third in the race.");
        } else {
            console.log(name + " participated in the race.");
        }
    }
    //Introduction text
    console.log();
    console.log("Welcome to the Running Carnival Results");
    console.log();
    console.log("We had 5 races today and 5 participants,");
    console.log("Christian, David, Jack, Karina and Luke");
    console.log("(at any time type exit to exit)");
    //while loop allows exit to exit
    while (true) {
        console.log();
        let runner = await askQuestion("Name a runner in the race? ");
        //below changes changes input to ParselCase;
        let firstLetter = runner.substring(0, 1);
        let remainderLetters = runner.substring(1, 99);
        firstLetter = firstLetter.toUpperCase();
        remainderLetters = remainderLetters.toLowerCase();
        runner = firstLetter + remainderLetters;
//exit command
        if (runner.toLowerCase() === "exit") {
            console.log("Thank you for checking the Carnival Results with us.");
            console.log();
            break;
        }
        let race = await askQuestion("Please enter the race number between 1 and 5: ");
        console.log();
//checkRace makes sure the number entered is valid
        function checkRace(race) {
            //  console.log(races.length;
            if (race < 1 || race > 5) {
                return false;
            } else {
                return true;
            }
        }
        //exit command
        if (race.toLowerCase() === "exit") {
            console.log("Thank you for checking the Carnival Results with us.");
            console.log();
            break;
        }
        let raceNumber = races['race' + race]; //changes race input to object name from array
        let checkRaces = checkRace(race); //gets a boolean answer if race is valid
        let inRace; //declared because it was breaking. not sure why
        if (checkRaces == true) { //checks if boolean is true for valid race 
            inRace = searchRace(raceNumber, runner); //checks if runner was in the race true or false
        } else {
            console.log(`Race ${race} does not exist.`);
            continue; 
        }
        if (inRace == true) { //if runner was in race
            let positions = position(raceNumber, runner);  // log position
        } else {
            console.log(`${runner} did not participate in ${race}.`);
        }
    }


}//your code should not go past here. 


Program().then(() => {
    process.exit(0);
});
