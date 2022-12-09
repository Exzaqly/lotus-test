import axios from 'axios'


const SET_AUCTION = 'auction/SET_AUCTION'

const initialState = {
  period: 120000,
  auction: {
    name: 'some lot',
    startedAt: 1200000,
    participants: [
      {
        name: 'participant1',
        isOnline: true,
        paymentTerms: 10,
        warranty: 36,
        productionTime: 50,
        hasEventThatRisingQuality: false,
      },
      {
        name: 'participant2',
        isOnline: true,
        paymentTerms: 10,
        warranty: 36,
        productionTime: 50,
        hasEventThatRisingQuality: false,
      },
      {
        name: 'participant3',
        isOnline: true,
        paymentTerms: 10,
        warranty: 36,
        productionTime: 50,
        hasEventThatRisingQuality: false,
      },
      {
        name: 'participant3',
        isOnline: true,
        paymentTerms: 10,
        warranty: 36,
        productionTime: 50,
        hasEventThatRisingQuality: false,
      }],
  },
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
    const auction = await axios.get(`/auctions/${id}`).then(res => res.data)
    dispatch(actions.setAuction(auction))
  }catch (e) {
    console.error(e)
  }
}