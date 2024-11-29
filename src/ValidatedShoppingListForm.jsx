import { useState } from "react";

export default function ValidatedShoppingListForm ({addItem}) {
    const [formData, setFormData] = useState({product: "", quantity: 0});
    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (product) => {
        if(product.length ===0 ) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    }
    const handleChange = (evt) => {
        if(evt.target.name==="product") {
            validate(evt.target.value);
        }
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value,
            }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(productIsValid) {
            addItem(formData);
            setFormData({product: "", quantity: "0"})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name</label>
            <input type="text" name="product" id="product" placeholder="Product Name" onChange={handleChange} value={formData.product}/>
            {!productIsValid && (
                <p style={{color: "red"}}>Product name cannot be empty</p>
            )}

            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" placeholder="1" onChange={handleChange} value={formData.quantity}/>

            <button disabled={!productIsValid}>Add items</button>
        </form>
    )
}