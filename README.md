# Advanced Redux

This is the advanced redux portion from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)


## Attempting to solve before watching videos

- Found probably the most non-elegant solution in history for the addItem reducer, but it works
```js
addItem(state, action) {
  const exists = state.items.filter(
    (item) => item.title === action.payload.title
  )
  if (exists.length === 1) {
    for (const item of state.items) {
      if (item.title === action.payload.title) {
        item.quantity = item.quantity + 1
        item.total = item.total + item.price
        state.cartTotal += item.price
        break
      }
    }
  } else {
    state.items.push(action.payload)
    state.cartTotal += action.payload.price
  }
}
```
- And the decreaseQuantity reducer reduces the quantity but does not delete the item from the cart
```js
decreaseQuantity(state, action) {
  for (let item of state.items) {
    if (item.title === action.payload.title) {
      item.quantity = item.quantity - 1
      item.total = item.total - item.price
      state.cartTotal = state.cartTotal - item.price
      if (item.quantity === 0) {
        item = {}
      }
    }
  }
}
```

## Improvements after watching instructor's solution

- Moved toggling cart to a uiSlice file