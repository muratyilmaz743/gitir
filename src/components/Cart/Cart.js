import classes from "Cart.module.css";
const Cart = (props) => {
  //    class ismini kontrol edicem
  const cartItems = (
    <ul className={classes.cartItems}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.48</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
