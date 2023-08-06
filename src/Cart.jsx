
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartReducer'; 


function Cart() {
  const cartItems = useSelector((state) => state.cart); 
  console.log('cart', cartItems)
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.strCategory}</p>
              <img src={item.strCategoryThumb} alt={item.strCategory} />
              <p>{item.strCategoryDescription}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
}

export default Cart;
