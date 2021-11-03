// function AddToCart(quantity,productName='default') {
//     console.log('Sepete eklendi ' + productName + ' ' + quantity + ' ' + 'adet')
// }

// //2.parametre default idi. bu sekilde sorunsuz calisir
// AddToCart(10)

// AddToCart(15,'Armut')


// let Selamla = () => {
//     console.log(`selamm`)
// }

// Selamla()


function AddToCart2(product) {
    console.log('Urun :' + product.productName)
    console.log("Adet :" + product.quantity)
    console.log("Price :" + product.unitPrice)
}

let product1 = {
    productName : 'Elma',
    unitPrice : 10,
    quantity : 5
}

AddToCart2(product1)