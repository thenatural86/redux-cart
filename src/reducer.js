import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case DECREASE:
      console.log('decrease')
    case INCREASE:
      console.log('increase')
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}

export default reducer
