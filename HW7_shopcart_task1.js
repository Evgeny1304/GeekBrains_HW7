//Задание 1.

var $container = document.getElementById("container");
var shopCart = {}; //Объект для хранения цены купленного товара.
var shopCartCount = {}; //Объект для хранения количества купленных товаров.

var products = [
    {
        type: "T-shirt",
        size: "M",
        color: "Blue",
        sex: "Men",
        cost: 300
    },
    {
        type: "Hoodie",
        size: "M",
        color: "Grey",
        sex: "Men",
        cost: 500
    },
    {
        type: "Jeans",
        size: "32Lx32W",
        color: "Blue",
        sex: "Men",
        cost: 150
    },
    {
        type: "Underwear",
        size: "M",
        color: "Black",
        sex: "Men",
        cost: 50
    }
];

var productsCatalog = {
    product0: 300,
    product1: 500,
    product2: 150,
    product3: 50
};

function getFullCartSum(objCart){
    var sumCart = 0;
    for (var item in objCart) {
        sumCart += objCart[item];
    }
    return sumCart;
}

function getFullCartCount(objCart){
    var countCart = 0;
    for (var item in objCart) {
        countCart += objCart[item];
    }
    return countCart;
}

function getCartTotal(){
    var $totalCart = document.createElement("div");
    $totalCart.classList.add("cart-block");
    var $cartNull = document.createElement("p");
    $cartNull.classList.add("cart-total");
    $cartNull.style.display = "none";
    $cartNull.textContent = "Корзина пуста";
    $totalCart.appendChild($cartNull);
    var $totalCount = document.createElement("p");
    $totalCount.classList.add("cart-total");
    $totalCount.style.display = "none";
    $totalCount.textContent = "Количество товаров в корзине: "+getFullCartCount(shopCartCount);
    $totalCart.appendChild($totalCount);
    var $totalCost = document.createElement("p");
    $totalCost.classList.add("cart-total");
    $totalCost.style.display = "none";
    $totalCost.textContent = "Итоговая сумма: "+getFullCartSum(shopCart);
    $totalCart.appendChild($totalCost);
    var $buttonClear = document.createElement("button");
    $buttonClear.classList.add("button-clear");
    $buttonClear.textContent = "Очистить корзину";
    $totalCart.appendChild($buttonClear);
    $container.appendChild($totalCart);
    if (Object.keys(shopCartCount).length === 0){
        $cartNull.style.display = "block";
        $totalCount.style.display = "none";
        $totalCost.style.display = "none";
        $buttonClear.style.display = "none";
    } else{
        $cartNull.style.display = "none";
        $totalCount.style.display = "block";
        $totalCost.style.display = "block";
        $buttonClear.style.display = "block";
    }
}

function cartCheck(){
    var $totalCartText = document.getElementsByClassName("cart-total");
    var $buttonNextCart = document.getElementsByClassName("button-nextCart")[0];
    var $buttonClear = document.getElementsByClassName("button-clear")[0];
    if (Object.keys(shopCartCount).length === 0){
        $totalCartText[0].style.display = "block";
        $totalCartText[1].style.display = "none";
        $totalCartText[2].style.display = "none";
        $buttonNextCart.style.display = "none";
        $buttonClear.style.display = "none";
    } else{
        $totalCartText[0].style.display = "none";
        $totalCartText[1].style.display = "block";
        $totalCartText[1].textContent = "Количество товаров в корзине: "+getFullCartCount(shopCartCount);
        $totalCartText[2].style.display = "block";
        $totalCartText[2].textContent = "Итоговая сумма: "+getFullCartSum(shopCart);
        $buttonClear.style.display = "block";
    }
}

function getProductCatalog(){
    var $productCatalogText = document.createElement("p");
    $productCatalogText.classList.add("catalog-text");
    $productCatalogText.textContent = "Добро пожаловать в каталог нашего магазина. Для добавления товара в корзину нажмите кнопку Купить";
    $container.appendChild($productCatalogText);

    var $productCatalog = document.createElement("div");
    $productCatalog.classList.add("product-catalog");
    $container.appendChild($productCatalog);

    for (var i = 0; i < products.length; i++){
        var $product = document.createElement("div");
        $product.classList.add("product");
        $productCatalog.appendChild($product);
        var productImages = ["img/T-shirt.jpg", "img/Hoodie.jpg", "img/Jeans.jpg", "img/Underwear.jpg"];
        var $image = document.createElement("img");
        $image.classList.add("product-image");
        $image.src = productImages[i];
        $product.appendChild($image);

        for (var j in products[i]){
            var $productCharacter = document.createElement("p");
            $productCharacter.classList.add("product-character");
            $productCharacter.textContent = j + ": " + products[i][j];
            $product.appendChild($productCharacter);
        }

        var $button = document.createElement("button");
        $button.classList.add("button-catalog");
        $button.textContent = "Купить";
        $button.setAttribute("id","button"+i);
        $button.setAttribute("data-id","product"+i);
        $product.appendChild($button);
    }
}

function getCartCatalog(){
    var $cartText = document.createElement("p");
    $cartText.classList.add("catalog-textCart");
    $cartText.textContent = "Корзина (здесь будут отображаться купленные товары)";
    $container.appendChild($cartText);

    var $cart = document.createElement("div");
    $cart.classList.add("shop-cart");
    $container.appendChild($cart);

    for (var i = 0; i < products.length; i++) {
        var $productCart = document.createElement("div");
        $productCart.classList.add("product-cart");
        $productCart.setAttribute("id", "product" + i);
        $cart.appendChild($productCart);

        var productImages = ["img/T-shirt.jpg", "img/Hoodie.jpg", "img/Jeans.jpg", "img/Underwear.jpg"];
        var $image = document.createElement("img");
        $image.classList.add("product-image");
        $image.src = productImages[i];
        $productCart.appendChild($image);

        for (var j in products[i]) {
            var $productCharacter = document.createElement("p");
            $productCharacter.classList.add("product-character");
            $productCharacter.textContent = j + ": " + products[i][j];
            $productCart.appendChild($productCharacter);
        }
        var $productCount= document.createElement("p");
        $productCount.classList.add("product-character");
        $productCart.appendChild($productCount);
        var $buttonPlus = document.createElement("button");
        $buttonPlus.classList.add("button-plus");
        $buttonPlus.textContent = "+";
        $buttonPlus.setAttribute("data-id","product"+i);
        $productCart.appendChild($buttonPlus);
        var $buttonMinus = document.createElement("button");
        $buttonMinus.classList.add("button-minus");
        $buttonMinus.textContent = "-";
        $buttonMinus.setAttribute("data-id","product"+i);
        $productCart.appendChild($buttonMinus);
        var $buttonDelete = document.createElement("button");
        $buttonDelete.classList.add("button-delete");
        $buttonDelete.textContent = "Удалить";
        $buttonDelete.setAttribute("data-id","product"+i);
        $productCart.appendChild($buttonDelete);
    }

    var $buttonNextCart = document.createElement("button");
    $buttonNextCart.classList.add("button-nextCart");
    $buttonNextCart.textContent = "Далее";
    $container.appendChild($buttonNextCart);
}

function getShipAddressForm(){
    var $shipAddress = document.createElement("form");
    $shipAddress.classList.add("ship-form");
    $container.appendChild($shipAddress);
    var $shipText = document.createElement("p");
    $shipText.classList.add("catalog-text");
    $shipText.textContent = "Адрес доставки";
    $shipAddress.appendChild($shipText);
    var $inputFirstName = document.createElement("input");
    $inputFirstName.classList.add("ship-input");
    $inputFirstName.type = "text";
    $inputFirstName.placeholder = "First Name";
    $shipAddress.appendChild($inputFirstName);
    var $inputLastName = document.createElement("input");
    $inputLastName.classList.add("ship-input");
    $inputLastName.type = "text";
    $inputLastName.placeholder = "Last Name";
    $shipAddress.appendChild($inputLastName);
    var $inputAddress = document.createElement("input");
    $inputAddress.classList.add("ship-input");
    $inputAddress.type = "text";
    $inputAddress.placeholder = "Address";
    $shipAddress.appendChild($inputAddress);
    var $inputCode = document.createElement("input");
    $inputCode.classList.add("ship-input");
    $inputCode.type = "text";
    $inputCode.placeholder = "Postal code";
    $shipAddress.appendChild($inputCode);
    var $buttonNext = document.createElement("button");
    $buttonNext.type = "submit";
    $buttonNext.classList.add("button-next");
    $buttonNext.textContent = "Далее";
    $shipAddress.appendChild($buttonNext);
}

function getCommentForm(){
    var $comment = document.createElement("form");
    $comment.classList.add("comment-form");
    $container.appendChild($comment);
    var $commentText = document.createElement("p");
    $commentText.classList.add("catalog-text");
    $commentText.textContent = "Оставьте комментарий";
    $comment.appendChild($commentText);
    var $inputComment = document.createElement("input");
    $inputComment.classList.add("comment-input");
    $inputComment.type = "text";
    $inputComment.placeholder = "Comment";
    $comment.appendChild($inputComment);
    var $buttonNextComment = document.createElement("button");
    $buttonNextComment.type = "submit";
    $buttonNextComment.classList.add("button-next");
    $buttonNextComment.textContent = "Далее";
    $comment.appendChild($buttonNextComment);
}

getCartTotal();
getProductCatalog();
getCartCatalog();
getShipAddressForm();
getCommentForm();


var $buttons = document.getElementsByClassName("button-catalog");
var $buttonsPlus = document.getElementsByClassName("button-plus");
var $buttonsMinus = document.getElementsByClassName("button-minus");
var $buttonsDelete = document.getElementsByClassName("button-delete");

function handleButtonClick(event){
    var idProduct = this.getAttribute("data-id");
    var $productCart = document.getElementById(idProduct);
    $productCart.style.display = "flex";
    $buttonNextCart.style.display = "block";
    if (shopCart[idProduct] != undefined){
        shopCartCount[idProduct]++;
        shopCart[idProduct] += productsCatalog[idProduct];
    } else {
        shopCartCount[idProduct] = 1;
        shopCart[idProduct] = productsCatalog[idProduct];
    }
    $productCart.childNodes[5].textContent = "cost: "+shopCart[idProduct];
    $productCart.childNodes[6].textContent = "count: "+shopCartCount[idProduct];
    cartCheck();
    event.preventDefault();
}

function handleButtonMinus(event){
    var idProduct = this.getAttribute("data-id");
    var $productCart = document.getElementById(idProduct);
    if (shopCartCount[idProduct] > 1){
        shopCartCount[idProduct]--;
        shopCart[idProduct] -= productsCatalog[idProduct];
    } else {
        delete shopCartCount[idProduct];
        delete shopCart[idProduct];
        $productCart.style.display = "none";
    }
    $productCart.childNodes[5].textContent = "cost: "+shopCart[idProduct];
    $productCart.childNodes[6].textContent = "count: "+shopCartCount[idProduct];
    cartCheck();
    event.preventDefault();
}

function handleButtonDelete(event) {
    var idProduct = this.getAttribute("data-id");
    var $productCart = document.getElementById(idProduct);
    delete shopCartCount[idProduct];
    delete shopCart[idProduct];
    $productCart.style.display = "none";
    cartCheck();
    event.preventDefault();
}

for (var i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener('click', handleButtonClick);
    $buttonsPlus[i].addEventListener('click', handleButtonClick);
    $buttonsMinus[i].addEventListener('click', handleButtonMinus);
    $buttonsDelete[i].addEventListener('click', handleButtonDelete);
}


var $buttonClear = document.getElementsByClassName("button-clear")[0];
function handleButtonClearCart(event){
    var $productsCart = document.getElementsByClassName("product-cart");
    var $buttonNextCart = document.getElementsByClassName("button-nextCart")[0];
    shopCartCount = {};
    shopCart = {};
    for (var j = 0; j < $productsCart.length; j++){
        $productsCart[j].style.display = "none";
    }
    $buttonNextCart.style.display = "none";
    cartCheck();
    event.preventDefault();
}

$buttonClear.addEventListener('click', handleButtonClearCart);

var $buttonNextCart = document.getElementsByClassName("button-nextCart")[0];
function handleButtonCartNext(event){
    var $cartText = document.getElementsByClassName("catalog-textCart")[0];
    var $cart = document.getElementsByClassName("shop-cart")[0];
    var $shipAddress = document.getElementsByClassName("ship-form")[0];
    $cartText.style.display = "none";
    $cart.style.display = "none";
    $buttonNextCart.style.display = "none";
    $shipAddress.style.display = "flex";
    event.preventDefault();
}

$buttonNextCart.addEventListener("click", handleButtonCartNext);

var $buttonNext = document.getElementsByClassName("button-next")[0];
function handleButtonShipNext(event){
    var $shipAddress = document.getElementsByClassName("ship-form")[0];
    var $comment = document.getElementsByClassName("comment-form")[0];
    $shipAddress.style.display = "none";
    $comment.style.display = "flex";
    event.preventDefault();
}

$buttonNext.addEventListener("click", handleButtonShipNext);

var $buttonNextComment = document.getElementsByClassName("button-next")[1];
function handleButtonCommentNext(event){
    handleButtonClearCart();
    var $comment = document.getElementsByClassName("comment-form")[0];
    var $cartText = document.getElementsByClassName("catalog-textCart")[0];
    var $cart = document.getElementsByClassName("shop-cart")[0];
    $comment.style.display = "none";
    $cartText.style.display = "block";
    $cart.style.display = "flex";
    event.preventDefault();
}

$buttonNextComment.addEventListener("click", handleButtonCommentNext);






