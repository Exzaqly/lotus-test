import s from './Participant.module.scss'

export const Participant = ({ index, name, hasEventThatRisingQuality, paymentTerms, productionTime, warranty }) => {
  return (
    <div className={s.participant}>
      <div>
        <h3>Участник №{index + 1}</h3>
        <div>{name}</div>
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