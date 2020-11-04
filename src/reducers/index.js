
const initialState = {
  menu: [],
  loading: true,
  items: [],
  allCartPrice: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
      }
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true,
      }
    case 'ITEM_ADD_TO_CART':
      const id = action.payload

      if (state.items.find(elem => elem.id === id)) {
        const item = state.items.find(elem => elem.id === id)
        const itemIndex = state.items.findIndex(elem => elem.id === id)
        const newItem = {
          title: item.title,
          price: item.price,
          url: item.url,
          id: item.id,
          quantity: item.quantity + 1
        }

        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndex),
            newItem,
            ...state.items.slice(itemIndex + 1),
          ],
          allCartPrice: state.allCartPrice + item.price
        }
      } else {
        const item = state.menu.find(elem => elem.id === id)
        const newItem = {
          title: item.title,
          price: item.price,
          url: item.url,
          id: item.id,
          quantity: 1
        }
        
        return {
          ...state,
          items: [
            ...state.items, newItem
          ],
          allCartPrice: state.allCartPrice + item.price
        }
    }

    case 'ITEM_REMOVE_FROM_CART':
      const idx = action.payload
      const itemIndex = state.items.findIndex(item => item.id === idx)
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ]
      }

    case 'SUCCESS_SEND':
      console.log(action.payload);
      return {
        ...state,
        items: [],
        allCartPrice: 0
      }
    default: 
      return state
  }
}

export default reducer