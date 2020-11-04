

const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
}

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED'
  }
}

const addedToCard = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id
  }
}


const deleteFromCard = (id) => {
  return {
    type: 'ITEM_REMOVE_FROM_CART',
    payload: id
  }
}

const successSend = (result) => {
  return {
    type: 'SUCCESS_SEND',
    payload: result
  }
}

const sendOrderToDb = () => {
  return async (dispatch, getState) => {
    const items = getState().items
    const result = await fetch('http://localhost:3000/order', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(items)
    })

    const response = await result.json()

    dispatch(successSend(response))
  }

}

export {
  menuLoaded,
  menuRequested,
  addedToCard,
  deleteFromCard,
  sendOrderToDb
}