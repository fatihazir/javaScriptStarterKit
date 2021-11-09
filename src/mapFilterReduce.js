let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    
    {id:2, productName:"Bardak", quantity:1, unitPrice:4000},
    
    {id:3, productName:"Kalem", quantity:6, unitPrice:4000},
    
    {id:4, productName:"Şarj cihazı", quantity:2, unitPrice:4000},
    
    {id:5, productName:"Kitap", quantity:9, unitPrice:4000},
    
    {id:6, productName:"Pot", quantity:3, unitPrice:4000}
   
]


//cart.map(element => console.log(element))


//filter bize yeni bir array dondurur
//let filteredCart = cart.filter(product => product.quantity > 2)
//console.log(filteredCart)


let total = cart.reduce((acc,product) => acc+ product.unitPrice,0)
console.log(total)



