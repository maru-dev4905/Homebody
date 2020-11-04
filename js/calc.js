var plusBtn = $(".plus");
var minusBtn = $(".minus"); 
var amount = $(".amount");
var result = $(".price");

var price = 270000;
var name = "TABLE SET 1400*1740";

plusBtn.click(function(){
    var amountNumber = amount.val();
    amountNumber = Number(amountNumber) + 1;
    amount.val(amountNumber);
    
    var resultNumber = result.text();
    resultNumber = Number(resultNumber) + price;
    result.text(resultNumber);
});

minusBtn.click(function(){
    var amountNumber = amount.val();
    amountNumber = Number(amountNumber) - 1;
    amount.val(amountNumber);
    
    var resultNumber = result.text();
    resultNumber = Number(resultNumber) - price;
    result.text(resultNumber);
});

var productName = $(".product-name");
var colorBtn1 = $(".color-btn1");
var colorBtn2 = $(".color-btn2");
var colorBtn3 = $(".color-btn3");

colorBtn1.click(function(){
    productName.text( name + "WHITE");
});
colorBtn2.click(function(){
    productName.text( name + "WHITE + OAK");
});
colorBtn3.click(function(){
    productName.text( name + "LIGHT OAK");
});

var buyBtn = $(".buy-btn");
var cartBtn = $(".cart-btn");

buyBtn.click(function(){
    var productCheck = productName.text();
    console.log(productCheck);
    if(productCheck.indexOf(name) != -1){
        alert("구매하셨습니다.");
    }else{
        alert("상품 색상을 선택해주세요.");
    }
});
cartBtn.click(function(){
    var productCheck = productName.text();
    console.log(productCheck);
    if(productCheck.indexOf(name) != -1){
        alert("장바구니의 상품을 담았습니다.");
    }else{
        alert("상품 색상을 선택해주세요.");
    }
});
