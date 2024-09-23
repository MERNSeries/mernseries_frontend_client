import { useState } from "react";
import api from "../api/api";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newProduct = { name, price: parseFloat(price), image };
      await api.post("/products", newProduct);
      setSuccess("Product added Successfully!");
      setError("");
      setName("");
      setPrice("");
      setImage("");
    } catch (error) {
      setError("Error adding Product.Please try again.", error);
      setSuccess("");
    }
  };

  return (
    <>
      <div className="add-product-container">
        <h1 className="title">Add New Product</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Product Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              aria-label="Product Price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              aria-label="Product Image URL"
            />
          </div>
          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
        {error ? <p className="error-message">{error}</p> : <></>}
        {success ? <p className="success-message">{success}</p> : <></>}
      </div>
    </>
  );
};

export default AddProduct;
