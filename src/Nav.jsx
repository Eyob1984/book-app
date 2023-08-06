// Nav.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './cartReducer';
import Cart from './Cart'; // Import the Cart component
import './nav.css';

function Nav() {
  const [showForm, setShowForm] = useState(false);
  const [foodList, setFoodList] = useState('');
  const [listData, setListData] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const data = useSelector((state) => state.data);
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleTitleButtonClick = () => {
    setShowForm(true);
  };

  const handleShowAllButtonClick = () => {
    setShowForm(false);
    setFoodList('');
    setListData(data);
  };

  const changeHandler = (e) => {
    const searchQuery = e.target.value;
    setFoodList(searchQuery);
    if (searchQuery) {
      setShowForm(true);
      search(searchQuery);
    } else {
      setShowForm(false);
      setListData([]);
    }
  };

  const search = (searchQuery) => {
    const searchMenu = data.filter((item) => {
      return item.strCategory.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setListData(searchMenu);
  };

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    console.log(`Adding "${item.strCategory}" to cart.`);
  };

  const handleCartButtonClick = () => {
    setShowCart(!showCart);
    setListData(false)
    setShowForm(false);
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
    console.log(`Removing "${item.strCategory}" from cart.`);
  };

  return (
    <div>
      <p>Food APP</p>
      <div>
        <button onClick={handleTitleButtonClick}>Search by name</button>
        <button onClick={handleShowAllButtonClick}>Show All Products</button>
        <button onClick={handleCartButtonClick}>View Cart</button>
        {showForm && (
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
              type='text'
              id='search'
              placeholder='search menu'
              onChange={changeHandler}
              value={foodList}
            />
            <button type='submit'>Submit</button>
          </form>
        )}
        {listData.length ? (
          <div>
            {listData.map((item, index) => (
              <div key={index}>
                <p>{item.strCategory}</p>
                <img src={item.strCategoryThumb} alt={item.strCategory} />
                <p>{item.strCategoryDescription}</p>
                <button onClick={() => addToCartHandler(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No data available. Please fetch data first.</p>
        )}
      </div>

      {showCart && (
        <div>
          <h2>Shopping Cart</h2>
          {cartItems.length ? (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>{item.strCategory}</p>
                  <img src={item.strCategoryThumb} alt={item.strCategory} />
                  <p>{item.strCategoryDescription}</p>
                  {/* Add button to remove item from the cart */}
                  <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </div>
              ))}
            </div>
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Nav;
