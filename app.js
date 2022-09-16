const productsList = document.getElementById("products-list");
const cartItems = document.getElementById("cart-items");
let selected = []
let i = 0;
for (const product of products) {
    const div = document.createElement("div")
    div.classList.add("product");
    div.innerHTML = `
     <img src="${product.imageUrl}" alt="">
    <h2>${product.title} </h2>
    <div>
         <p>Price: <b>${product.price}</b></p>
        <p>Stock: <b>${product.Quantity}</b></p>
        </div>
     <button onclick="selectItem(${product.id})" id="d${product.id}">add to cart</button>`
    productsList.appendChild(div)
}
const selectItem = id => {
    document.getElementById(`d` + id).setAttribute('disabled', '');
    document.getElementById(`d` + id).style.backgroundColor = "gray";

    selected.push(products[id]);


    let item = products[id]


    cartItems.innerHTML += `  
         <div class="cart-s"> 
         <p>${item.title}</p>
            <div class="qytp">
                  <div class="qyt" >
                    <button onclick="itemsQytPlus('qyt${item.id}', false, ${item.Quantity}, 'price${item.id}')">-</button>
                    <input id="qyt${item.id}" type="text" value="1">
                    <button onclick="itemsQytPlus('qyt${item.id}', true, ${item.Quantity}, 'price${item.id}')">+</button>
                  </div>
                  <div id="price${item.id}"><b> ${item.price}</b> </div>
            </div>
          </div>
        `;

}




const itemsQytPlus = (id, stat, limit, priceId) => {
    if (stat) {
        const chenge = document.getElementById(id);
        const price = document.getElementById(priceId);
        const priceNumber = parseInt(price.innerText);
        const plusQyt = parseInt(chenge.value);
        if (plusQyt + 1 > limit) {
            return;
        }
        price.innerText = priceNumber + (priceNumber / plusQyt)
        chenge.value = plusQyt + 1
    }
    else {
        const chenge = document.getElementById(id);
        const price = document.getElementById(priceId);
        const priceNumber = parseInt(price.innerText);
        const plusQyt = parseInt(chenge.value);
        if (plusQyt - 1 == 0) {
            return;
        }
        price.innerText = parseInt(priceNumber - (priceNumber / plusQyt))
        chenge.value = plusQyt - 1
    }

}