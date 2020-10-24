export const initial_state = {
  cart: []
};

export const Reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_IN_BUCKET":
      return {
        ...state,
        cart: [...state.cart, action.value]
      };
    case "REMOVE_FROM_BASKET":
      let new_value = state.cart;

      delete new_value.splice(action.value, 1);
      console.log(new_value);
      return {
        ...state,
        cart: new_value
      };
    default:
      return state;
  }
};
