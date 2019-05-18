"use strict";   //initialize strict mode for not to use undeclared variable 



const inquirer = require('inquirer');
const chalk = require('chalk');


const response = chalk.bold.white.bgBlue;

const cv = require("./info.json");  


const resumePrompts = {

    type : "list" ,
    name : "resumeOptions",
    message : chalk.whiteBright.bgRed.bold("Select option's from below...."),
    choices : [...Object.keys(cv),"Exit", new inquirer.Separator()]  //finds all the option from the info.json file also includes 'Exit' as an option.



};

function main () {

    console.log(chalk.bgYellow.black.bold("Welcome, I am happy you are reading this. "));
    cvHandler();
}

function cvHandler(){
    inquirer.prompt(resumePrompts).then(answer => {
        if(answer.resumeOptions =="Exit"){
            return;
        }
        const  option = answer.resumeOptions;
        
        
        cv[`${option}`].forEach(element => {        //for every option that selected changes the background color
          console.log(response(element));       
        });


        inquirer
            .prompt({
                type: "list",
                name: "goBack",
                message: chalk.bold.bgRed.whiteBright("Go back or Exit?"),
                choices: ["Back", "Exit" ]
            })
            .then(choice => {
                if (choice.goBack == "Back") {
                    
                    cvHandler();

                }
                else {
                    return;
                }

            });
    });
}

main();