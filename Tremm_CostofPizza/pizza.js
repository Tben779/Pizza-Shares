function calculate()
{
    //Input!
    //Ask User for amount of People
    let totalPeople = prompt("How many people are there?");
    //Ask User for amount of Toppings
    let totalToppings = prompt("How many toppings do you desire?");
    //Multiply amount of Toppings by price of Toppings
    let totalTCost = totalToppings * 1.25;
    //Add cost of Pizza to product of Toppings
    let totalPizzaCost = totalTCost + 15.00
    //Divide by amount of People
    let totalFinal = totalPizzaCost/totalPeople
    //Convert into two decimal number value
    //Output!
    //Alert User total amount each participant will pay
    alert(`Each member will pay $${(totalFinal.toFixed(2))}!`);
}