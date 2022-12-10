import axios from 'axios'

const SET_AUCTION = 'auction/SET_AUCTION'

const initialState = {
  auction: null,
}

export const auctionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUCTION: {
      return {
        ...state,
        auction: { ...action.payload }
      }
    }
    default:
      return state
  }
}

const actions = {
  setAuction: (auction) => ({type: SET_AUCTION, payload: auction})
}

export const getAuction = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/auctions/${id}`)
    dispatch(actions.setAuction(data))
  }catch (e) {
    console.error(e)
  }
}