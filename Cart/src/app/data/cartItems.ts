// data would usually come from backend
import { products } from "./products"

export const cartitems = [{
        id:products[0].id,
        name:products[0].name,
        netPrice: products[0].price,
        vat: products[0].price*0.19,
        totalvat: products[0].price*0.19*2,
        description: products[0].description,
        quantity: 2,
        totalPrice: products[0].price*2 + products[0].price*0.19*2
    },
    {
        id:products[1].id,
        name:products[1].name,
        netPrice: products[1].price,
        vat: products[1].price*0.19,
        totalvat: products[1].price*0.19*3,
        description: products[1].description,
        quantity: 3,
        totalPrice: products[1].price*3 + products[1].price*0.19*3
    },
    {
        id:products[2].id,
        name:products[2].name,
        netPrice: products[2].price,
        vat: products[2].price*0.19,
        totalvat: products[2].price*0.19*2,
        description: products[2].description,
        quantity: 2,
        totalPrice: products[2].price*2 + products[2].price*0.19*2,
    } 
]
