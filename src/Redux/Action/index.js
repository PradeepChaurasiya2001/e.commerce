import Product from "../../Component/Product";

// For Add Item to Card
export const addCart  = (Product) => {
    return{
        type : "ADDITEM",
        payload : Product
    }
}


// for Delete Item From Cart
export const delCart = (Product) => {
    return{
        type : "DELETEITEM",
        payload : Product
    }
}