document.addEventListener('DOMContentLoaded', () => {
    fetch('/products')
        .then((response) => response.json())
        .then((products) => displayProduct(products))
    // .then(() => {
    //     fetch('/cart')
    //         .then((response) => response.json())
    //         // .then((cart) => displayCart(cart));;
    //         // 여기서 display하는게 아니고 다른 페이지로 이동
    //         .then((cart) => {
    //             window.location.href = '/cart.html'
    //         });
    // });
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
                // .then((cart) => displayCart(cart));
                .then((cart) => {
                    window.location.href = '/cart.html';
                });

        });
}