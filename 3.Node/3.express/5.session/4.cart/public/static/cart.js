document.addEventListener('DOMContentLoaded', () => {
    fetch('/products')
        .then((response) => response.json())
        .then((products) => displayProduct(products))
        .then(() => {
            fetch('/cart')
                .then((response) => response.json())
                .then((cart) => displayCart(cart));
        });
    // fetch('/cart')
    //     .then((response) => response.json())
    //     .then((cart) => displayCart(cart));
});

function displayProduct(products) {
    // console.log(products);
    const productTabledBody = document.querySelector('#productTable tbody');
    console.log(productTabledBody);

    products.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>            
            <td><button onclick="addToCart(${product.id})">담기</button></td>            
        `;
        productTabledBody.appendChild(row);
    });
}

function addToCart(productId) {
    // fetch(`/add-to-cart/${productId}`, { method: 'GET' })
    fetch(`/add-to-cart/${productId}`, { method: 'POST' })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            // alert(JSON.stringify(data.cart));
            fetch('/cart')
                .then((response) => response.json())
                .then((cart) => displayCart(cart));
        });
}

function displayCart(cart) {
    const cartTableBody = document.querySelector('#cartTable tbody');
    cartTableBody.innerHTML = '';   // 지우고 새로 그림
    cart.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
                ${0}
                <button onclick="plus()">+</button>
                <button onclick="minus()">-</button>            
            </td>
            <td><button>Remove</button></td>
        `
        cartTableBody.appendChild(row);
    });
}

function deleteInCart() {

}