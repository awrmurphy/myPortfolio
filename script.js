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
