export const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    case "REMOVE_ITEM": {
      ///console.log(action.payload);
      const newCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      //console.log(newCart);
      return { ...state, cart: newCart };
    }
    case "INCREASE": {
      let newCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: newCart };
    }
    case "DECREASE": {
      let newCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: newCart };
    }
    case "TOGGLE_AMOUNT": {
      let newCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "increase") {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (action.payload.type === "decrease") {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: newCart };
    }
    case "GET_TOTAL": {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += price * amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    }
    case "LOADING": {
      return { ...state, loading: true };
    }
    case "DISPLAY_ITEMS": {
      return { ...state, loading: false, cart: action.payload };
    }
    default: {
      console.error("unexpected action type");
      return state;
    }
  }
};
