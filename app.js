// Function for update iphone case number
function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // Update product total
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;

    // Calculate total
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(product){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    // Update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}





// Handle phone increase & decrease events     
document.getElementById("phone-plus").addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});
document.getElementById("phone-minus").addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
});

// Handle phone-case increase & decrease events
// For case plus update
document.getElementById("case-plus").addEventListener('click', function() {
    updateProductNumber('case', 59, true);
});

// For case minus update
document.getElementById("case-minus").addEventListener('click', function() {
    updateProductNumber('case', 59, false);
})