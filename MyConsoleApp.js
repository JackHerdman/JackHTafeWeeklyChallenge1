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

    //searches the race entered to make sure the name is in it
    function searchRace(race, name) {
        let hasName = false;

        if (hasName != race.includes(name)) {
            return true;
        } else {
            return false;
        }
    }
    //finds the position of the runner and tells you where they came
    function position(race, name) {
        if (race.indexOf(name) == 0) {
            console.log(name + " came first in the race");
        } else if (race.indexOf(name) == 1) {
            console.log(name + " came second in the race");
        } else if (race.indexOf(name) == 2) {
            console.log(name + " came third in the race");
        } else {
            console.log(name + " participated in the race");
        }
    }
    console.log();
    console.log("Welcome to the Running Carnival Results");
    console.log();
    console.log("We had 5 races today and 5 participants,");
    console.log("Christian, David, Jack, Karina and Luke");
    console.log("(at any time type exit to exit)");
    while (true) {
        console.log();
        let runner = await askQuestion("Name a runner in the race? ");
        //console.log(runner);
        let firstLetter = runner.substring(0, 1);
        let remainderLetters = runner.substring(1, 99);
        firstLetter = firstLetter.toUpperCase();
        remainderLetters = remainderLetters.toLowerCase();
        runner = firstLetter + remainderLetters;

        if (runner.toLowerCase() === "exit") {
            console.log("Thank you for checking the Carnival Results with us.");
            console.log();
            break;
        }
        let race = await askQuestion("Please enter the race number between 1 and 5: ");
        //console.log(race);
        function checkRace(race) {
            //  console.log(races.length;
            if (race < 1 || race > 5) {
                return false;
            } else {
                return true;
            }
        }
        if (race.toLowerCase() === "exit") {
            console.log("Thank you for checking the Carnival Results with us.");
            console.log();
            break;
        }
        let raceNumber = races['race' + race]; //find object in array
        let checkRaces = checkRace(race);
        let inRace;
        if (checkRaces == true) { //checks if race exists
            inRace = searchRace(raceNumber, runner);
        } else {
            console.log(`race ${race} does not exist`);
            continue;
        }
        //console.log(checkRaces);
        if (inRace == true) { //checks if runner ran in that race
            let positions = position(raceNumber, runner);
        } else {
            console.log(`${runner} did not participate in ${race}`);
        }
    }


}//your code should not go past here. 


Program().then(() => {
    process.exit(0);
});
