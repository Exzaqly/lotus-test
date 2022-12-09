import s from './Participant.module.scss'

export const Participant = ({ index, name, hasEventThatRisingQuality, paymentTerms, productionTime, warranty, isOnline }) => {
  return (
    <div className={s.participant}>
      <div>
        <h3>Участник №{index + 1}</h3>

        { isOnline? <div className={s.online}>{name}</div> : <div>{name}</div>}
      </div>
      <div>
        {hasEventThatRisingQuality ? '+' : '-'}
      </div>
      <div>
        {productionTime}
      </div>
      <div>
        {warranty}
      </div>
      <div>
        {paymentTerms}
      </div>
      <div>
        3 500 000 руб.
      </div>
    </div>
  )
}