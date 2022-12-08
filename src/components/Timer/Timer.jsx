import s from './Timer.module.scss'


export const Timer = ({ timerValue }) => {
  return (
    <div className={s.timer}>
      {new Date(120000- timerValue).toISOString().slice(11,19) }
    </div>
  )
}