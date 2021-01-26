import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case DECREASE:
      console.log('decrease')
    case INCREASE:
      let tempCart = state.cart.map((cartItem) => {
        // console.log(cartItem)
        if (cartItem.id === action.payload.id) {
          return (cartItem = { ...cartItem, amount: cartItem.amount + 1 })
        }
        return cartItem
      })
      return { ...state, cart: tempCart }
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
