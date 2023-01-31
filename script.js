const discoMargin = 0.3;
let totalDiscountPrice, price, discount, vat, vatIncluded, priceInput, discountInput, vatIncludedCheckbox, vatInput;

function init (){
    let mainDiv = document.createElement("div");
    let div = document.createElement('div');
    let calculateBtn = document.createElement('button');
    let result = document.createElement('div');

    result.classList.add('result');

    mainDiv.innerHTML = "<h3>Calculate Slash discount!</h3>";
    vatInput = document.createElement("input");
    priceInput = document.createElement("input");
    discountInput = document.createElement('input');
    vatIncludedCheckbox = document.createElement("input");
    vatIncludedCheckbox.type = 'checkbox';

    priceInput.classList.add("price");
    discountInput.classList.add("discount");
    vatInput.classList.add('vat')
    vatIncludedCheckbox.classList.add("vat_included");


    div.className = "vat";
    div.textContent = "VAT (%): "
    vatInput.value = '20';
    vatInput.onkeydown = function (){if (event.key === 'Enter') nextField()};
    div.appendChild(vatInput);
    mainDiv.appendChild(div);

    div = document.createElement('div');
    div.className = "discount";
    div.textContent = "Discount (%): "
    discountInput.onkeydown = function (){if (event.key === 'Enter') nextField()};
    div.appendChild(discountInput);
    mainDiv.appendChild(div);

    div = document.createElement('div');
    div.className = 'item_price';
    div.textContent = 'Price: ';
    priceInput.onkeydown = function (){if (event.key === 'Enter') calculate()};
    div.appendChild(priceInput);
    mainDiv.appendChild(div);

    div = document.createElement('div');
    div.className = "vat_included";
    div.textContent = "Vat included: "
    div.appendChild(vatIncludedCheckbox);
    mainDiv.appendChild(div);

    div = document.createElement('div');
    calculateBtn.textContent = 'Calculate';
    calculateBtn.onclick = calculate;
    div.appendChild(calculateBtn);
    mainDiv.appendChild(div);

    document.body.appendChild(mainDiv);
    document.body.appendChild(result);



}

function nextField(e){
    console.log((e));
}

function calculate(){
    getDataFromPage();

    if (vatIncluded)
        vat = 0;

    discount = Math.trunc((price * (1 - vat) * discount) * 100) / 100;
    discount = Math.trunc((discount * (1 - discoMargin)) * 100) / 100;
    console.log("Total discount: " + discount);
    totalDiscountPrice = price - discount;

    document.querySelector(".result").innerHTML = "<h1>"+ Math.round(totalDiscountPrice * 100) / 100 +"</h1>";


}

function getDataFromPage(){
    vat = document.querySelector(" input.vat").value / 100;
    discount = document.querySelector("input.discount").value / 100;
    price = document.querySelector("input.price").value;
    vatIncluded = document.querySelector("input.vat_included").checked;
}

window.onload = init;

//todo: Добавить вывод суммы скидки
//todo: Добавить ваучер как множитель для скидки