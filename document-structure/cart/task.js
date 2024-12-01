const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

[...products].forEach((product) => {
    const decBtn = product.querySelector('.product__quantity-control_dec')
    const incBtn = product.querySelector('.product__quantity-control_inc')
    const value = product.getElementsByClassName('product__quantity-value')[0]
    const addBtn = product.querySelector('.product__add')
    const productImg = product.querySelector('.product__image')
    decBtn.addEventListener('click', () => {
        if (Number(value.textContent) > 1) {
            value.textContent = Number(value.textContent) - 1
        }
    })
    incBtn.addEventListener('click', () => {
        value.textContent = Number(value.textContent) + 1
    })
    addBtn.addEventListener('click', () => {
        const cartElements = cart.querySelectorAll('.cart__product')
        let ids = {};

        cartElements.forEach(element => ids[element.dataset.id] = element)
        console.log(ids)
        if (ids.hasOwnProperty(product.dataset.id)) {
            const count = ids[product.dataset.id].querySelector('.cart__product-count')
            count.textContent = value.textContent
        } else {
            const img = document.createElement('img')
            img.className = 'cart__product-image'
            img.src = productImg.src

            const valueDiv = document.createElement('div')
            valueDiv.className = 'cart__product-count'
            valueDiv.textContent = value.textContent;

            const mainDiv = document.createElement('div')
            mainDiv.className = 'cart__product'
            mainDiv.dataset.id = product.dataset.id
            mainDiv.appendChild(img)
            mainDiv.appendChild(valueDiv)
            cart.appendChild(mainDiv)
        }
    })
})
