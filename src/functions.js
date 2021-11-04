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




//////////////////////////////////////////////////////////////////////////



// function AddToCart2(product) {
//     console.log('Urun :' + product.productName)
//     console.log("Adet :" + product.quantity)
//     console.log("Price :" + product.unitPrice)
// }

// let product1 = {
//     productName : 'Elma',
//     unitPrice : 10,
//     quantity : 5
// }

// AddToCart2(product1)



/////////////////////////////////////////////////////////////////////////



//spread operator, birden fazla parametreli bir fonksiyon
//varsa en son parametre olarak kullan

// function Add(...numbers){
//     let tempSum = 0
//     numbers.forEach(element => {
//         tempSum += element
//     });

//     console.log(tempSum)
// }

// Add(1,2,3,4,5)



// let numbers = [30,10,451,800,1]
// console.log(numbers)//array gibi indexli verir
// console.log(...numbers)



///////////////////////////////////////////////////////////////////////////////



//destructing operator
//arrayde koseli parantez
let [first,second,third] = [{name:"ic anadolı"},"marmara","karadeniz"]
console.log(first.name + second + third)

//objeysee kıvrık parantez
let product5 = {productName:"Elma", unitPrice:10, quantity:5}
let {productName,unitPrice,quantity} = product5
console.log(productName + unitPrice + quantity)