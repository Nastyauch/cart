let cartPlace = document.querySelectorAll('.cart').item(0); 
let goods = document.querySelectorAll('.goods').item(0);   
let finances = +document.querySelectorAll('.finances').item(0).textContent;
let col = +document.querySelectorAll('.col').item(0).textContent;
let good = document.querySelectorAll('.good');
let dataGood, dataPriceGood;

cartPlace.addEventListener('dragover', function (event) {
    event.preventDefault();
});
goods.addEventListener('dragover', function (event) {
    event.preventDefault();
});
for (el of good) {
    el.addEventListener('dragstart', function (event) {
        dataGood = this;
        dataPriceGood = +this.textContent;
    });
};
cartPlace.addEventListener('drop', function(event) {
    if (finances-dataPriceGood >= 0) {
        this.appendChild(dataGood);
        document.querySelectorAll('.col').item(0).textContent = ++col;
        finances=finances-dataPriceGood;
        document.querySelectorAll('.finances').item(0).textContent=finances;}
    else alert('Не достаточно средств');
});
goods.addEventListener('drop', function(event) {
    this.appendChild(dataGood);
    document.querySelectorAll('.col').item(0).textContent = --col;
    finances=finances+dataPriceGood;
    document.querySelectorAll('.finances').item(0).textContent=finances;
});