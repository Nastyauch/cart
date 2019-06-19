let cartArea = document.querySelectorAll('.cart').item(0); 
let goodsArea = document.querySelectorAll('.goods').item(0); 
let good = document.querySelectorAll('.good');  
let finances = +document.querySelectorAll('.finances').item(0).textContent;
let col = +document.querySelectorAll('.col').item(0).textContent;
let dataGood, dataPriceGood;

cartArea.addEventListener('dragover', function (event) {
    event.preventDefault();
});
goodsArea.addEventListener('dragover', function (event) {
    event.preventDefault();
});
for (el of good) {
    el.addEventListener('dragstart', function (event) {
        dataGood = this;
        dataPriceGood = +this.textContent;
    });
};
cartArea.addEventListener('drop', function(event) {
    if (finances-dataPriceGood >= 0) {
        this.appendChild(dataGood);
        document.querySelectorAll('.col').item(0).textContent = ++col;
        finances=finances-dataPriceGood;
        document.querySelectorAll('.finances').item(0).textContent=finances;}
    else alert('Не достаточно средств');
});
goodsArea.addEventListener('drop', function(event) {
    this.appendChild(dataGood);
    document.querySelectorAll('.col').item(0).textContent = --col;
    finances=finances+dataPriceGood;
    document.querySelectorAll('.finances').item(0).textContent=finances;
});