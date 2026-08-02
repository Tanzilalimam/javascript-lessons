console.log('class 9 DOM');
let incr = document.querySelector('.incr');
let dcr = document.querySelector('.dcr');
let disp = document.querySelector('.disp');
let mssg = document.querySelector('.mssg');

disp.innerHTML = `0`;
let i = 0;
let d = 1;

let dsbl = function(){
    if(i >=10){
        incr.disabled = true;
        incr.style.backgroundColor = 'grey';
    }
    else{
        incr.disabled = false;
        incr.style.backgroundColor = 'rebeccapurple';

    }
    if(i<=-10){
        dcr.disabled = true;
        dcr.style.backgroundColor = 'grey';
    }
    else{
        dcr.disabled = false;
        dcr.style.backgroundColor = 'rebeccapurple';
    }
    if(i>=10 || i<=-10){
        mssg.innerHTML = `counter stopped`;
    }
    else{
        mssg.innerHTML = ``;
    }
}
dsbl();

// gpt opt 1-

incr.addEventListener('click', function(){
    console.log(' incr clicked');
    if(i>=10){
        dsbl();
        // mssg.innerHTML = `counter stopped`;
        return;
    }
    i = d+i;
    disp.innerHTML = `${i}`;
    dsbl();
    // mssg.innerHTML = ``;
});

dcr.addEventListener('click', function(){
    console.log('dcr clicked');
    if(i<=-10){
        dsbl();
        // mssg.innerHTML = `counter stopped`;
        return;
    }
    i -= d;
    disp.innerHTML = `${i}`;
    dsbl();
    // mssg.innerHTML = ``;
});