import axios from 'axios'

export const auctionAPI = {
  getAuction: (id) => {
    axios.get(`/auction/${id}`).then(res => res.data)
  },
}