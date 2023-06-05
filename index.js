import inquirer from "inquirer";
import chalk from "chalk";
let vowels = await inquirer.prompt([
    {
        name: "character",
        type: "Input",
        message: "Please enter a character:",
    }
]);
let caseLower = vowels.character.toLowerCase();
if (caseLower === 'a' || caseLower === 'e' || caseLower === 'i' || caseLower === 'o' || caseLower === 'u') {
    console.log(chalk.green(`"You entered the character '${caseLower}', which is a Vowel.`));
}
else {
    console.log(chalk.yellowBright(`You entered the character '${caseLower}', which is a Consonant.`));
}
