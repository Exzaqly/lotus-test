import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auctionSelector } from '../../redux/selectors'
import { getTimerState } from '../../helpers/getTimerState'
import s from './Auction.module.scss'
import { Timer } from '../Timer/Timer'
import { Participant } from '../Participant/Participant'
import { getAuction } from '../../redux/auctionReducer'

export const Auction = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const auction = useSelector(auctionSelector)
  const [timer, setTimer] = useState({})

  useEffect(() => {
    dispatch(getAuction(params.id))
  }, [dispatch, params.id])

  useEffect(() => {
    if (!auction) {
      return;
    }
    
    setTimer(getTimerState(auction.startedAt, auction.participants.length))
    const timerInterval = setInterval(() => {
      setTimer(getTimerState(auction.startedAt, auction.participants.length))
    }, 1000)
    return () => {
      clearInterval(timerInterval)
    }
  }, [auction])

  if (!auction) {
    return <div>Loading...</div>
  }
  
  return (
    <div className={s.auction_page}>
      <div className={s.auction_header}>
        Ход торгов <span>{auction.name}</span>
      </div>
      <div className={s.auction_warning}>
        Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:
      </div>
      <div className={s.auction_table}>
        <div className={s.auction_table_header}>
          <div>
            <div className={s.move}>
              Ход
            </div>
            <div className={s.params}>
              Параметры и требования
            </div>
          </div>
          <div>
            Наличие комплекса мероприятий, повышающих стандарты качества изготовления
          </div>
          <div>
            Срок изготовления лота, дней
          </div>
          <div>Гарантийный обязательства, мес</div>
          <div>Условия оплаты</div>
          <div>Стоимость изготовления лота, руб. (без НДС)</div>
        </div>
        {auction.participants.map((p, index) => {
          if (timer.currentParticipantIndex === index) {
            return (
              <div key={index}>
                <Timer timerValue={timer.timerValue} />
                <Participant index={index} name={p.name} hasEventThatRisingQuality={p.hasEventThatRisingQuality}
                             productionTime={p.productionTime} warranty={p.warranty} paymentTerms={p.paymentTerms} isOnline={p.isOnline} />
              </div>
            )
          }
          return (
            <div className={s.participant_container} key={index}>
              <Participant index={index} name={p.name} hasEventThatRisingQuality={p.hasEventThatRisingQuality}
                           productionTime={p.productionTime} warranty={p.warranty}
                           paymentTerms={p.paymentTerms} isOnline={p.isOnline}/>
            </div>
          )
        })}

      </div>
    </div>
  )
}


