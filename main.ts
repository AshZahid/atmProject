import inquirer from "inquirer"

let myBalance = 0
let isContinue = true;
const pin = 8900;
//meessage
const message = "Welcome to ATM";
console.log(message)

let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please enter pin code:"
})



if(pin_ans.ans === 8900){
do{
    let ans = await inquirer.prompt({
        type: "list",
        name: "list",
        message: "Select any option",
        choices: ["Deposit", "withdraw","fast cash","balance check"]
    })
    //deposit
    if(ans.list=== "Deposit"){
        let ans = await inquirer.prompt({
            type: "number",
            name: "Deposit_amount",
            message:"Please enter your amount:"
        })
        if(ans.Deposit_amount>0){
            myBalance = myBalance + ans.Deposit_amount
            console.log(myBalance);
        }
    }
    //withdraw
    else if(ans.list === "withdraw"){
       let ans = await inquirer.prompt({
        type: "number",
        name: "withdraw_amount",
        message: "please enter your amount:"
       }) 
       if(ans.withdraw_amount<= myBalance){
        myBalance = myBalance - ans.withdraw_amount
        console.log(myBalance);
       }else{
        console.log("Not enough money");
       }
    }
    
    //fast cash
    else if(ans.list === "fast cash"){
        let ans = await inquirer.prompt({
            type: "list",
            name: "fast cash",
            message:"Please select one",
            choices: ["500" , "1000" , "2000"]
        })
        if(ans.fast_cast<= myBalance){
            if(ans.fastcash = "500"){
                myBalance -= ans.fastcash
                console.log(myBalance);
            
            }else if(ans.fastcash = "1000"){
                myBalance -= ans.fastcash
                console.log(myBalance);  
            }else if(ans.fastcash = "2000"){
                myBalance -= ans.fastcash
                console.log(myBalance);  
        }
    }

}
//check balance
 else if(ans.list === "balance check"){
    console.log(`your balance is: ${myBalance}`);
  }
  //while condition
  let while_ans = await inquirer.prompt({
    type: "confirm",
    name: "condition",
    message: "Do you want to continue:"
  })
  if(while_ans.condition === false){
    isContinue = false
  }

}while(isContinue);


} 
else{
    console.log("Invalid Pin");
};

