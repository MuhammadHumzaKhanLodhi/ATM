import { BADFLAGS } from "dns";
import inquirer from "inquirer";


let mybalance:number = 99999;
let myppin:number = 1234;


let pinAnswer = await inquirer.prompt(
    {
        name: "pin",
        type: "number",
        message: "Enter Your PIN:"
    }
);
if(pinAnswer.pin === myppin){
    console.log("Correct PIN code! Proceeding...");


    let operation = await inquirer.prompt(
         {
            name:"operations",
            type:"list",
            message:"Please Select Operation",
            choices:["Withdraw", "Check Your Balance", "Quick Withdraw"]
        }
    );
    if(operation.operations === "Withdraw"){
        let amount= await inquirer.prompt(
            {
                name:"amount",
                type:"number",
                message:"Enter the amount to be withdrawn:",
            }
        );
        mybalance -= amount.amount;
        if (amount.amount< mybalance){
            console.log (`${"Your remaining balance is"}  ${mybalance}`)
        } else if(amount.amount>mybalance){
            console.log("Insufficient Balance")
        }
    } else if(operation.operations === "Check Your Balance"){
        console.log(`${"Your Current Balance is:"} ${mybalance}`)
    } else if(operation.operations === "Quick Withdraw"){
        let amount2= await inquirer.prompt(
           {
            name: "Quickselect",
            type: "list",
            choices: ["1000", "2000", "3000", "4000", "5000"]
           } 
        );
        if(amount2.Quickselect === "1000")
        {console.log(`${"Your Remaining Balance is:"}${mybalance-1000}`)}
        else if(amount2.Quickselect === "2000")
            {console.log(`${"Your Remaining Balance is:"}${mybalance-2000}`)}
        else if(amount2.Quickselect === "3000")
            {console.log(`${"Your Remaining Balance is:"}${mybalance-3000}`)}
        else if(amount2.Quickselect === "4000")
            {console.log(`${"Your Remaining Balance is:"}${mybalance-4000}`)}
        else if(amount2.Quickselect === "5000")
            {console.log(`${"Your Remaining Balance is:"}${mybalance-5000}`)}
    }
}
else{console.log("Your PIN is incorrect. Please try again, Thankyou.")}
