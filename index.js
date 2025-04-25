//ASSIGNMENT//
//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
const scheduleDays = (days)=>{
    days.forEach(day =>{
        switch(day){
            case "Monday":
            console.log("mattress")
            break;
            case "Tuesday":
            console.log("clothes")
            break;

            case "Thursday":
            console.log("soda")
            default:
                console.log("no deliveries")
        }})}
        let days = ["Monday","Friday","Saturday","Tuesday"]
        scheduleDays(days)



//Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".
const bookStatuses =(statuses)=>{
    statuses.forEach(status=>{
   switch(status){
    case "available":
        console.log(`Ready to lend`);
    break;

    case "borrowed":
    console.log("checkout")
    break;

    default:
    console.log("book not available")

   }})
}
let statuses = ["borrowed","available","lost"]
bookStatuses(statuses)


//Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.

function customersAges(ages){
    for(let i = 0;i< ages.length;i++){
        let ageGroup ;
        if(ages[i] >= 18){
            ageGroup = "adult"
        }
        else{ 
            ageGroup = "minor"
        }
        console.log (`${ageGroup}`)
    }}
    let peopleAges = [40,12,43,32,7,8,17]
    customersAges(peopleAges)



    //Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
   
    
    const livesCountDown = ()=>{
       let counter = 5;
       while(counter >0){ 
    console.log(`you have ${counter} left`)
   counter--;}
   
   console.log("stop")
    }
livesCountDown()



    //Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.


const customerFeedbacks = (feedbacks)=>{

    for (feedback of feedbacks)
    
    do{ 
        console.log(`${feedback}`)
        feedback--;
        
    }
    while(feedback< feedback.length)

}
let comments = ["it's beautiful","I enjoyed it"]
customerFeedbacks(comments)


//Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.


const userLogin = (logins)=>{
logins.forEach(login =>{
    switch(login){
   case 'logged in':
   console.log('welcome back!')
   break;

   default:
    console.log('please log in')
    break;
    }})
}
let userStatuses = ["login","sign up","logged in"]
userLogin(userStatuses)

//Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".

const supportTickets = (tickets)=>{
tickets.forEach(ticket=>{
    switch(ticket){
        case "high":
            console.log("it's agent")
            break;

            case "medium":
            console.log("limitted time")
            break;

            case "low":
                console.log("Needed on time")
                break;
            default:
                console.log("no tickets")

    }})
}
let numberTickets = ["medium","low","high","speedy"]
supportTickets(numberTickets)

//Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
const quizCountDown = ()=>{
    let count = 10;
    while(count > 0){
        console.log(count)
    count--;}
    console.log("time out!")
}
quizCountDown()

