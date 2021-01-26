import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case DECREASE:
      let tempKart = state.cart.map((cartItem) => {
        // console.log(cartItem)
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      return { ...state, cart: tempKart }
    case INCREASE:
      let tempCart = state.cart.map((cartItem) => {
        // console.log(cartItem)
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 }
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
    case GET_TOTALS:
      // console.log('yolo total')
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          // console.log(cartItem)
          const { price, amount } = cartItem
          const itemTotal = price * amount
          cartTotal.total += itemTotal
          cartTotal.amount += amount

          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }
    default:
      return state
  }
}

export default reducer
