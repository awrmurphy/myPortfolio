
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

//FlipBoxes for projects
const flipBoxes = document.querySelectorAll('.flip-box');
flipBoxes.forEach(function(el){
    el.addEventListener('mouseenter',function(){
        el.classList.add('flip-box-active');
    })
    el.addEventListener('mouseleave',function(){
        el.classList.remove('flip-box-active');
    })
    el.addEventListener('click',function(){
        
        
        switch (el.getAttribute('id')){
            case 'proj1Content':
                var win = window.open('https://awrmurphy.github.io/CPAN113GroupAssignment/')
                win.focus();
                break;
            case 'proj2Content':
                var win = window.open('https://awrmurphy.github.io/dynamic-blog-website/')
                win.focus();
                break;
            case 'proj3Content':
                var win = window.open('https://awrmurphy.github.io/CPAN113Lab10/')
                win.focus();
                break;
        }
    })
})
