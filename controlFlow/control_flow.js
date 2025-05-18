// practice variables
let employee = false;
let dietaryServices;
let enrolled = false;
let dietician;
let subscriber = false;

// practice access conditional
if (employee) {
    dietaryServices = "have access to Dietary Services, and"; 
    dietician = "don't have access to the Dietician.";   
}
else if (enrolled) {
    dietaryServices = "have access to Dietary Services, and";
    dietician = "have access to the Dietician!";
} 
else if (subscriber){
    dietaryServices = "have partical access to Dietary Services, and";
    dietician = "don't have access to Dietician.";
}
else {
    dietaryServices = "No access to Dietary Services, and";
    dietician = "don't have access to Dietician.";
    console.log("Please subcribe or enroll for access.");
};
// output
console.log("With this account you",dietaryServices, dietician);