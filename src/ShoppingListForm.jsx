import { useState } from "react";

export default function ShoppingListForm () {
    const [formData, setFormData] = useState({product: "", quantity: 0});
    const handleChange = (evt) => {
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value,
            }
        })

    }

    return (
        <form action="">
            <h1>Product is: {formData.product} and quantity is {formData.quantity}</h1>

            <label htmlFor="product">Product Name</label>
            <input type="text" name="product" id="product" placeholder="Product Name" onChange={handleChange} value={formData.product}/>

            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" placeholder="1" onChange={handleChange} value={formData.quantity}/>

            <button>Add items</button>
        </form>
    )
}