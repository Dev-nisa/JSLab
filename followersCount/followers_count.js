// variables
let count = 0;

//FUNctions
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
};
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram gained 10 followers! Congratulations!");
    } else if (count === 20){
        alert("Your Instagram gained 20 followers! Keep it up!");
    }
};
function displayCount() {
    document.getElementById('countDisplay').innerText = count;
};
