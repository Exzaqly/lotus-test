import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auctionSelector, periodSelector } from '../../redux/selectors'
import { timerParams } from '../../helpers/timerParams'
import s from './Auction.module.scss'
import { Timer } from '../Timer/Timer'
import { Participant } from '../Participant/Participant'
import { getAuction } from '../../redux/auctionReducer'

export const Auction = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const auction = useSelector(auctionSelector)
  const period = useSelector(periodSelector)
  const [timer, setTimer] = useState({})

  useEffect(() => {
    dispatch(getAuction(params.id))
  }, [])

  useEffect(() => {
    setTimer(timerParams(auction.startedAt, period, auction.participants.length))
    const timerInterval = setInterval(() => {
      setTimer(timerParams(auction.startedAt, period, auction.participants.length))
    }, 1000)
    return () => {
      clearInterval(timerInterval)
    }
  }, [])
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
          <div className={s.block}>
            Наличие комплекса мероприятий, повышающих стандарты качества изготовления
          </div>
          <div className={s.block}>
            Срок изготовления лота, дней
          </div>
          <div className={s.block}>Гарантийный обязательства, мес</div>
          <div className={s.block}>Условия оплаты</div>
          <div className={s.block}>Стоимость изготовления лота, руб. (без НДС)</div>
        </div>
        {auction.participants.map((p, index) => {
          if (timer.currentParticipantIndex === index) {
            return (
              <div key={index}>
                <Timer timerValue={timer.timerValue} />
                <Participant index={index} name={p.name} hasEventThatRisingQuality={p.hasEventThatRisingQuality}
                             productionTime={p.productionTime} warranty={p.warranty} paymentTerms={p.paymentTerms} />
              </div>
            )
          }
          return (
            <div className={s.participant_container} key={index}>
              <Participant index={index} name={p.name} hasEventThatRisingQuality={p.hasEventThatRisingQuality}
                           productionTime={p.productionTime} warranty={p.warranty}
                           paymentTerms={p.paymentTerms} />
            </div>
          )
        })}

      </div>
    </div>
  )
}


