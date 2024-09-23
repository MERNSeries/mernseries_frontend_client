/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, favourites, toggleFavourite } = useContext(CartContext);

  const isFavourite = favourites.some((item) => item._id === product._id);

  const handleFavouriteToggle = () => {
    toggleFavourite(product);
  };

  return (
    <>
      <div className="product-card">
        <div className="product-card-header">
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image"
            onError={(e) =>
              (e.target.src = "https://placehold.co/600x400/000000/FFFFFF/png")
            }
          />
          <button
            className={`favorite-like ${isFavourite ? "active" : ""}`}
            onClick={handleFavouriteToggle}
            aria-label={
              isFavourite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
        <div className="product-card-title">{product.name}</div>
        <p className="product-card-price">${product.price}</p>
        <button
          className="add-to-cart-button"
          aria-label="Add to cart"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
