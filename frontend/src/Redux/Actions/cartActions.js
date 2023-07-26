import axios from "axios";
import { CART_ADD_ITEM } from "../Constants/CartConstant";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    // Handle any errors that might occur during the API call or dispatching the action.
    // You can add error handling code here, like dispatching an error action or showing an error message.
    console.error("Error adding item to cart:", error);
  }
};
