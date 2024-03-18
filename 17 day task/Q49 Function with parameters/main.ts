// Question 49:** Function with Rest Parameters: 
// Write a function that takes a rest parameter representing multiple hobbies.
//  It should log each hobby with a statement
//  saying you enjoy that hobby.


function logHobbies(...hobbies: string[]) {
    // Loops through each hobby 

    hobbies.forEach(hobby => {
    // Logs a statement for each hobby
    console.log(`I enjoy ${hobby}.`);
    });
    }
    
    // Calls the function with three hobbies
    logHobbies("Playing cricket", "Coding", "listing naats");