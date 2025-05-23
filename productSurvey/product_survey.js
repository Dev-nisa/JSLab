const submitButton=document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

function submitFeedback(){
    //variables 
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userExp = document.getElementById('userExperience').value;
    // alert confirmation
    alert('Thank you for your valuable feedback');
    //output data
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('experience').innerHTML = userExp;
    document.getElementById('userInfo').style.display = 'block';
}
// if user hits enter, instead of clicking, the event will still happen
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });