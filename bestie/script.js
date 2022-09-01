// Scroll btn
let scrollbtn = document.getElementById('scroll');

const items = document.querySelector('.item');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btn = document.createElement('div');
const detailBtn = btn.innerHTML = 'View Detail';
items.append(detailBtn);

btn.addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

scrollbtn.addEventListener('click', function(){
    // window.scrollTo(0,0);

    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
})


// hide and show divs
let cosmetics = document.getElementById('cosmetics');
let accessories = document.getElementById('accessories');
let food = document.getElementById('food');

//  hide show btn
let cosbtn = document.getElementById('cosbtn');
let accbtn = document.getElementById('accbtn');
let foodbtn = document.getElementById('foodbtn');


// Color variables

let decolorcos = function(){
    cosbtn.style.backgroundColor = '#fff';
    cosbtn.style.color = '#000';
};
let decoloracc = function(){
    accbtn.style.backgroundColor = '#fff';
    accbtn.style.color = '#000';
};
let decolorfood = function(){
    foodbtn.style.backgroundColor = '#fff';
    foodbtn.style.color = '#000';
};

let colorcos = function(){
    cosbtn.style.backgroundColor = '#000';
    cosbtn.style.color = '#fff';
};
let coloracc = function(){
    accbtn.style.backgroundColor = '#000';
    accbtn.style.color = '#fff';
};
let colorfood = function(){
    foodbtn.style.color = '#fff';
    foodbtn.style.backgroundColor = '#000';
};

// hide show variables
let showcos = function(){
    cosmetics.classList.remove('hidden');
};
let showacc = function(){
    accessories.classList.remove('hidden');
};
let showfood = function(){
    food.classList.remove('hidden');
};

let hidecos = function(){
    cosmetics.classList.add('hidden');
};
let hideacc = function(){
    accessories.classList.add('hidden');
};
let hidefood = function(){
    food.classList.add('hidden');
};

showcos();
colorcos();

// hide show functions
cosbtn.addEventListener('click',function(){
    colorcos();
    decoloracc();
    decolorfood();

    showcos();
    hideacc();
    hidefood();
})

accbtn.addEventListener('click',function(){
    coloracc();
    decolorcos();
    decolorfood();
    
    showacc();
    hidecos();
    hidefood();
})

foodbtn.addEventListener('click',function(){
    colorfood();
    decolorcos();
    decoloracc();
    
    showfood();
    hidecos();
    hideacc();
})

