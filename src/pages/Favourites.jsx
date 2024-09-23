import { useContext } from "react";
import CartContext from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Favourites = () => {
  const { favourites } = useContext(CartContext);

  return (
    <>
      <div className="favorites-page">
        <h1>Favourites</h1>
        <div className="favorites-grid">
          {favourites.length > 0 ? (
            favourites.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No favourite items yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Favourites;
