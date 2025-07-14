var toReveal='';
function reveal(){
    console.log(toReveal);
  var x = document.getElementById(toReveal);
  if (x.style.display === 'inline') {
    x.style.display = 'none';
    console.log('I ran!');
    
  } else {
    x.style.display = 'inline';
  }
}
function validateForm(){
    let x =document.forms["contactForm"]["name"].value;
    if (x==""){
        alert("Please enter something for me to refer to you by.");
        return false;
    }
    let y =document.forms["contactForm"]["email"].value;
    if (y==""){
        alert("Please enter an email for me to reach out to you.");
        return false;
    }
    if (!y.toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        alert("Please enter a VALID email for me to reach out to you.");
        return false;
    }
    let z =document.forms["contactForm"]["message"].value;
    if (z==null){
        alert("Please enter a message to send to me.");
        return false;
    }
    if (z.length<10){
        alert("Please enter a message of at least 10 characters to a maximum of 200 characters.");
        return false;
    }
    else{
        return true
    }
}