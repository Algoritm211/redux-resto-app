

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

const sendOrderToDb = (body) => {
  return async dispatch => {
    const result = await fetch('http://localhost:3000/order', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: body
    })

    return await result.json()
    
  }

}

export {
  menuLoaded,
  menuRequested,
  addedToCard,
  deleteFromCard
}