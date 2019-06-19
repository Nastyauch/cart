let cartArea = document.querySelectorAll('.cart').item(0); 
let productsArea = document.querySelectorAll('.products').item(0); 
let product = document.querySelectorAll('.product');  
let finances = +document.querySelectorAll('.finances').item(0).textContent;
let col = +document.querySelectorAll('.col').item(0).textContent;
let tempProduct, tempPriceProduct;

cartArea.addEventListener('dragover', function (event) {
    event.preventDefault();
});
productsArea.addEventListener('dragover', function (event) {
    event.preventDefault();
});
for (elem of product) {
    elem.addEventListener('dragstart', function (event) {
        tempProduct = this;
        tempPriceProduct = +this.textContent;
    });
};
cartArea.addEventListener('drop', function(event) {
    if (finances-tempPriceProduct >= 0) {
        this.appendChild(tempProduct);
        document.querySelectorAll('.col').item(0).textContent = ++col;
        finances=finances-tempPriceProduct;
        document.querySelectorAll('.finances').item(0).textContent=finances;}
    else alert('Не достаточно средств');
});
productsArea.addEventListener('drop', function(event) {
    this.appendChild(tempProduct);
    document.querySelectorAll('.col').item(0).textContent = --col;
    finances=finances+tempPriceProduct;
    document.querySelectorAll('.finances').item(0).textContent=finances;
});