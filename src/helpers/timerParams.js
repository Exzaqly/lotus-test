export const timerParams = (startedAt, period, participantsCount) => {
  const roundProgress = (Date.now() - startedAt) % (period * participantsCount);

  let index = Math.trunc(roundProgress / period);
  if (index === participantsCount) {
    index--;
  }

  return {
    currentParticipantIndex: index,
    timerValue: roundProgress - index * period,
  };
}