document.addEventListener('DOMContentLoaded', () => {
    fetch('/cart')
        .then((response) => response.json())
        .then((cart) => displayCart(cart))
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

function displayCart(cart) {
    const cartTableBody = document.querySelector('#cartTable tbody');
    cartTableBody.innerHTML = '';   // 지우고 새로 그림
    cart.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><button onclick="increaseQuantity()">+</button>
                <button onclick="decreaseQuantity()">-</button>
            </td>  
            <td><button>Remove</button></td>
        `
        cartTableBody.appendChild(row);
    });
}

